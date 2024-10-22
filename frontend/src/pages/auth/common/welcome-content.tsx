function WelcomeContent() {
  return (
    <div className="h-screen flex items-center justify-center bg-primary W-full">
      <div className="flex flex-col gap-2">
        <img src="./event.jpg" alt="logo" className="w-64 h-56" />
        <h1 className="text-orange-500 text-6xl font-semibold">BLESSED-EVENTS</h1>
        <p className="text-gray-400 text-sm">Best place to manage your booking</p>
      </div>
    </div>
  );
}

export default WelcomeContent