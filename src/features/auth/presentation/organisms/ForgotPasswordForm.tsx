import { FormEvent, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ForgotPassword = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false); // Trạng thái mới cho việc verify OTP

  // Xử lý gửi yêu cầu forgot password
  const handleForgotPassword = (e: FormEvent) => {
    e.preventDefault();
    // Logic gửi email reset password (để trống)
    setIsOtpSent(true);
  };

  // Xử lý gửi OTP
  const handleOtpSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logic xác nhận OTP (để trống)
    // Giả lập thành công để chuyển sang form reset password
    setIsOtpVerified(true);
  };

  // Xử lý reset password
  const handleResetPassword = (e: FormEvent) => {
    e.preventDefault();
    // Logic reset password (để trống)
    console.log('Reset password with:', { email, newPassword, confirmPassword });
  };

  return (
    <div className={cn('flex flex-col gap-6 max-w-md mx-auto', className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="p-6 md:p-8">
          {!isOtpSent ? (
            // Form nhập email
            <form onSubmit={handleForgotPassword} className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Forgot Password</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email to reset your password
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          ) : !isOtpVerified ? (
            // Form nhập OTP
            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Verify OTP</h1>
                <p className="text-balance text-muted-foreground">Enter the OTP sent to {email}</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="otp">OTP Code</Label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
            </form>
          ) : (
            // Form nhập mật khẩu mới
            <form onSubmit={handleResetPassword} className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Reset Password</h1>
                <p className="text-balance text-muted-foreground">Enter your new password</p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
