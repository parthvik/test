import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExperienceList } from "./experience/ExperienceList";
import { ExperienceCreate } from "./experience/ExperienceCreate";
import { ExperienceEdit } from "./experience/ExperienceEdit";
import { ExperienceShow } from "./experience/ExperienceShow";
import { EngineerList } from "./engineer/EngineerList";
import { EngineerCreate } from "./engineer/EngineerCreate";
import { EngineerEdit } from "./engineer/EngineerEdit";
import { EngineerShow } from "./engineer/EngineerShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { BudgetList } from "./budget/BudgetList";
import { BudgetCreate } from "./budget/BudgetCreate";
import { BudgetEdit } from "./budget/BudgetEdit";
import { BudgetShow } from "./budget/BudgetShow";
import { EducationList } from "./education/EducationList";
import { EducationCreate } from "./education/EducationCreate";
import { EducationEdit } from "./education/EducationEdit";
import { EducationShow } from "./education/EducationShow";
import { JobTypeList } from "./jobType/JobTypeList";
import { JobTypeCreate } from "./jobType/JobTypeCreate";
import { JobTypeEdit } from "./jobType/JobTypeEdit";
import { JobTypeShow } from "./jobType/JobTypeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EngineerSearchService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Experience"
          list={ExperienceList}
          edit={ExperienceEdit}
          create={ExperienceCreate}
          show={ExperienceShow}
        />
        <Resource
          name="Engineer"
          list={EngineerList}
          edit={EngineerEdit}
          create={EngineerCreate}
          show={EngineerShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="Budget"
          list={BudgetList}
          edit={BudgetEdit}
          create={BudgetCreate}
          show={BudgetShow}
        />
        <Resource
          name="Education"
          list={EducationList}
          edit={EducationEdit}
          create={EducationCreate}
          show={EducationShow}
        />
        <Resource
          name="JobType"
          list={JobTypeList}
          edit={JobTypeEdit}
          create={JobTypeCreate}
          show={JobTypeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
