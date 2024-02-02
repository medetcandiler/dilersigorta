import { FC } from "react"
import { partners } from "./data"
import PartnerCard from "../PartnerCard"

const PartnersSection:FC = () => {
  return (
    <div>
      {partners.map(partner => (
        <PartnerCard key={partner.id} imageSrc={partner.imageSrc} />
      ))}
    </div>
  )
}

export default PartnersSection
