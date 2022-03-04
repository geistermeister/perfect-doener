import doenerIcon from '../resources/doener-icon-white.png'
import * as Styles from '../Styles.js'

interface props {
  activeSection: number,
  maxSections: number
}

export const SectionDisplay = ({ activeSection, maxSections }: props) => {
  const buildItems = () => {
    const result: JSX.Element[] = []
    for (let i = 0; i < maxSections; i++) {
      if (i === activeSection) {
        result.push(<img src={doenerIcon} alt="doener-icon"/>)
      }
      else {
        result.push(<span className={Styles.point}/>)
      }
    }
    return result
  }
  return (
    <div className={Styles.sectionDisplay}>
      {buildItems()}
    </div>
  )
}