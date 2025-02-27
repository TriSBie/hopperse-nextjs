'use client';

import { useState, useEffect } from 'react';
import { useIdle } from '@/lib/useIdle';
import { useRouter } from 'next/navigation';
import { useSessionContext } from '@/context/SessionContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Session } from '@/shared/types';

export function SessionTimeoutModal({ initialSession }: { initialSession: Session | null }) {
  const { session, setSession } = useSessionContext(); // Use context to update session
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(30);
  // const isIdle = useIdle(30 * 1000);
  const isIdle = useIdle(3);
  const router = useRouter();

  // Use initialSession to determine if a user is logged in
  useEffect(() => {
    if (initialSession) {
      setSession(initialSession);
      localStorage.setItem('isLogged', 'true');
    }

    if (!initialSession && localStorage.getItem('isLogged') === 'true') {
      setIsVisible(true);
    }

    if (isVisible) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleLogout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isIdle, initialSession]);

  const handleRefresh = async () => {
    const res = await fetch('/api/auth/refresh', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      // Update session state if you have a way to propagate it (e.g., via context or parent component)
      setIsVisible(false);
      setCountdown(30);
    }
  };

  const handleLogout = () => {
    fetch('/api/auth/logout', { method: 'POST' }).then(() => {
      localStorage.removeItem('isLogged');
      setIsVisible(false);
      router.push('/');
    });
  };

  if (!isVisible) return null;

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Phiên đăng nhập sắp hết hạn</DialogTitle>
          <DialogDescription>
            Phiên đăng nhập của bạn sẽ hết hạn sau {countdown} giây. Bạn muốn gia hạn?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleRefresh}>
            Gia hạn
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
