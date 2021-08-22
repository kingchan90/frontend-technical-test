import React from "react"
import { IAppTabContainer } from "../common/types"

import { SectionGroup } from "../components/section/SectionGroup"
import { SectionPanel } from "../components/section/SectionPanel"

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ContentWrapper from "../components/ContentWrapper";
import Navbar from "../components/Navbar";
import JobList from "../components/JobList";
import ContentRight from "../components/ContentRight";

import "./QuestionThree.scss"

export const QuestionThree: React.FC<IAppTabContainer> = ({service}) => {
  const menu = ["Home", "About", "Jobs", "Contact"];

  return (
    <SectionGroup>
      <SectionPanel>
        <Layout>
          <Sidebar/>
          <Navbar menu={menu} />
          <ContentWrapper>
            <JobList service={service}/>
            <ContentRight />
          </ContentWrapper>
        </Layout>
      </SectionPanel>
    </SectionGroup>
  )
}
