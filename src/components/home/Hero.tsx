import Header from "../ui/Header"
import heroImage from '../../assets/Gridlines.png'
import { Badge } from "../ui/Badge"
import { ArrowRightIcon, Check, FireIcon, GradientArrow, Rating, Star } from "../../assets/svg"
import Path from "../../assets/path27.png"
function Hero() {
  return (
    <div
      className="custom-gradient bg-no-repeat bg-cover min-h-screen w-full flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: '200%',
          backgroundPosition: 'center',
        }}
        className="bg-no-repeat  h-full w-full flex flex-col items-center "
      >
        <Header />
        <div className="pt-22 flex flex-col items-center justify-center ">

          <Badge>
            <FireIcon />
            <p>Exclus : Business high ticket</p>
          </Badge>
          <h1 className="font-bold leading-[80px] tracking-[0%]  text-5xl lg:text-7xl text-center max-w-2xl mt-3 text-transparent bg-clip-text custom-h1Gradient">
            Parce que Chaque  Lead <span className="relative custom-completeGradient">Compte
              <img src={Path} alt="" className="w-40 absolute -right-16 -bottom-4" />
            </span>
          </h1>
          <p className="text-[#717171] text-base font-medium pt-6 max-w-xl text-center pb-3">Chaque prospect suivi, chaque KPI en direct : Kombineo centralise tout dans un CRM pensé pour les business high-ticket.</p>
        </div>
        <div className="flex flex-wrap w-[90%] max-w-95 justify-center gap-4 mt-3">
          <button className="bg-[radial-gradient(circle,#E49600_80%,#C88400_100%)] w-47 h-12 rounded-lg flex items-center justify-center gap-2 text-white">Essayez gratuitement <ArrowRightIcon /></button>
          <button className="bg-white w-40.5 h-12 rounded-lg flex items-center justify-center gap-2"><p className="custom-textGradient">Voir démo</p> <GradientArrow/></button>
        </div>
        <div className="flex flex-wrap justify-center font-bold text-xs gap-3 mt-9 leading-none text-[#5E5E5E]">
          <div className="flex items-center gap-3">
            <Check />
            <p>Setup en 10 minutes</p>
          </div>
          <div className="flex items-center gap-3">
            <Check />
            <p>Support & migration en 1 clic</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <Rating/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </div>
      </div>
    </div>
  )
}

export default Hero
