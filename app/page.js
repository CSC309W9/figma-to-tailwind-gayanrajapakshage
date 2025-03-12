// app/page.js
export default function Home() {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
        <div className="w-[150px] h-[52px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px]" />
        <div className="left-[56px] top-3 absolute justify-start text-[#db4439] text-[20px] text-base font-black font-['Inknut_Antiqua']">Join</div>
      </div>
      <div className="origin-top-left rotate-[10deg] w-[543px] h-[590.40px] left-[1068.69px] top-[130px] absolute">
        
        <img className="w-full max-w-[470px] h-auto absolute left-[165px] top-[20px]" src="/coffee.jpeg"/>

      </div>
      <div className="w-[680px] left-[143px] top-[313px] absolute justify-start text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">BlaBla Coffee!</div>
      <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">Your NO.1 Choice</div>
      <div className="left-[64px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Home</div>
      <div className="left-[270px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Menu</div>
      <div className="left-[460px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Login</div>
      <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white" />
      <div className="w-full h-[75px] bottom-0 absolute bg-white flex justify-around items-center">
        <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']">Contact Information</div>
        <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']">Customer Policy</div>
        <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']">Be our partner today</div>
      </div>
    </div>
  );
}