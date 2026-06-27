import Button from '../Button'
import { SITE } from '../../utils/constants'

function CtaBanner() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Готові опанувати AI як продуктовий дизайнер?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          Приєднуйтесь до курсу з живими вебінарами та куратором — і зберіть свій кейс для портфоліо.
        </p>
        <div className="mt-8">
          <Button as="a" href={SITE.enrollUrl} size="lg">Записатися на курс</Button>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
