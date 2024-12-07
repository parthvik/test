import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { WorkerList } from "./worker/WorkerList";
import { WorkerCreate } from "./worker/WorkerCreate";
import { WorkerEdit } from "./worker/WorkerEdit";
import { WorkerShow } from "./worker/WorkerShow";
import { EmploymentStatusList } from "./employmentStatus/EmploymentStatusList";
import { EmploymentStatusCreate } from "./employmentStatus/EmploymentStatusCreate";
import { EmploymentStatusEdit } from "./employmentStatus/EmploymentStatusEdit";
import { EmploymentStatusShow } from "./employmentStatus/EmploymentStatusShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
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
        title={"ChatbotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="Worker"
          list={WorkerList}
          edit={WorkerEdit}
          create={WorkerCreate}
          show={WorkerShow}
        />
        <Resource
          name="EmploymentStatus"
          list={EmploymentStatusList}
          edit={EmploymentStatusEdit}
          create={EmploymentStatusCreate}
          show={EmploymentStatusShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
