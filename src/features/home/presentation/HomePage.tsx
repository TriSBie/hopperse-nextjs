import { Card } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-center text-primary mb-6">
            Chào mừng bạn đến với trang chủ
          </h1>
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Đây là nơi bạn bắt đầu hành trình khám phá và trải nghiệm những gì tuyệt vời nhất. Hãy
            tham gia cùng chúng tôi!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
