import FancyText from "@carefully-coded/react-text-gradient";

export default function IntroductionToCodemelyPage() {
  const myInfo = ["IT", "Quý bửu", "Vozer"];
  return (
    <div class='w-screen h-screen bg-[#171923] justify-center items-center flex text-center p-12'>
      <div class='grid gap-6'>
        <div>
          <img
            class='animate-my-animation w-1/3 mx-auto grayscale brightness-200'
            alt=''
            src='https://longphanquangminh.github.io/Long-Phan-Resume/images/logoML.png'
          />
        </div>
        <FancyText
          className='leading-relaxed font-bold text-5xl'
          gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
          animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
          animateDuration={2000}
        >
          🤖 HI CODEMELY, I'M LONG
        </FancyText>
        <p class='animate-bounce leading-relaxed text-3xl text-[#718096]'>
          ✨{" "}
          {myInfo.map((item: string, index: number) => (
            <span key={index}>
              <span class='text-[#cbd5e0]'>{item}</span>
              {index !== myInfo.length - 1 && <span>, </span>}
            </span>
          ))}{" "}
          là tôi
        </p>
      </div>
    </div>
  );
}
