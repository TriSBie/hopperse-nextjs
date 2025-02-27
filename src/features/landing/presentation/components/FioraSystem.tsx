export const FioraSystem = () => {
  const elements = [
    'Expense',
    'Income',
    'Reconciliation',
    'Reporting',
    'Payment',
    'Finance Margin',
    'Investment',
    'Marketing & Sale Automation',
  ];

  return (
    <section className="container mx-auto py-16 flex flex-col items-center">
      {/* Circle Center */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center border-2 border-green-500 rounded-full shadow-lg">
        <span className="text-xl font-bold text-green-600">FIORA</span>

        {/* Surrounding Elements */}
        {elements.map((item, index) => (
          <div
            key={index}
            className="absolute w-[120px] h-[50px] flex items-center justify-center border-2 border-green-400 rounded-full bg-white text-green-600 text-sm font-medium"
            style={{
              transform: `rotate(${(index * 360) / elements.length}deg) translate(150px) rotate(-${(index * 360) / elements.length}deg)`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
