import {
  SupportSection,
  SupportCircle,
  SupportTitle,
  SupportLogos,
  SupportLogoItems,
} from './styles'

import fejemg from '@component/assets/logo-fejemg.svg'
import unifei from '@component/assets/logo-unifei.svg'
import bj from '@component/assets/logo-bj.svg'
import Image from 'next/image'

export function Support() {
  return (
    <SupportSection>
      <SupportCircle />
      <SupportTitle>Quem nos apoia</SupportTitle>
      <SupportLogos>
        <SupportLogoItems>
          <Image
            src={fejemg}
            alt="Logo da FEJEMG"
            quality={50}
            fill
            sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SupportLogoItems>
        <SupportLogoItems>
          <Image
            src={unifei}
            alt="Logo da UNIFEI"
            quality={50}
            fill
            sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SupportLogoItems>
        <SupportLogoItems>
          <Image
            src={bj}
            alt="Logo da BJ"
            quality={50}
            fill
            sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SupportLogoItems>
      </SupportLogos>
    </SupportSection>
  )
}
