import Image from "next/image";

export default function homePage() {
  return (
  
<div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10 "
      style={{ backgroundImage: "url('/o.png')" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Digital Library</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>

        
      </div>
    </div>
  

  );
}