'use client';

import { useState, useEffect } from 'react';
import { useIdle } from '@/lib/useIdle';
import { useRouter } from 'next/navigation';
import { Session } from '@/shared/types';

export function SessionTimeoutModal({ initialSession }: { initialSession: Session | null }) {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(30); // 30 giây đếm ngược
  const isIdle = useIdle(30 * 60); // 30 phút không tương tác
  const router = useRouter();

  // Use initialSession to determine if a user is logged in
  useEffect(() => {
    if (!initialSession) {
      setIsVisible(false); // Hide modal if no session
      return;
    }

    if (isIdle && !isVisible) {
      setIsVisible(true);
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
  }, [isIdle, initialSession, isVisible]);

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
      router.push('/');
    });
  };

  if (!isVisible || !initialSession) return null; // Only show if session exists and timeout is triggered

  return (
    <div className="modal">
      <p>Phiên đăng nhập sẽ hết hạn sau {countdown} giây. Bạn muốn gia hạn?</p>
      <button onClick={handleRefresh}>Gia hạn</button>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
}
