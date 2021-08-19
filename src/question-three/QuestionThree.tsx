import React from "react"
import { IAppTabContainer } from "../common/types"

import { SectionGroup } from "../components/section/SectionGroup"
import { SectionPanel } from "../components/section/SectionPanel"

import Navbar from "./Navbar";

import "./QuestionThree.scss"

export const QuestionThree: React.FC<IAppTabContainer> = () => {

  const menu = ["Home", "About", "Jobs", "Contact"];
  return (
    <SectionGroup>

      <SectionPanel>
        <Navbar menu={menu} />
      </SectionPanel>

    </SectionGroup>
  )
}
