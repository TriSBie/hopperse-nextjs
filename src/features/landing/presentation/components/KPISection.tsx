export const KPSection = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {['KPS1', 'KPS2', 'KPS3', 'KPS4', 'KPS5', 'KPS6'].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-gray-300 rounded-lg p-6 shadow-md bg-white"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
