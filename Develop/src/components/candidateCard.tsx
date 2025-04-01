import { Styles } from '../pages/CandidateSearch.tsx'

type CardStyle = {
    styles: Styles
}

const CandidateCard = ({styles}: CardStyle) => {
    return (
        <section style={styles.card}>
            <section style={styles.logoIMG}>

            </section>
        </section>
    )
}

export default CandidateCard;