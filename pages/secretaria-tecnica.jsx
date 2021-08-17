import Secretarias from "../components/secretarias/Secretarias";
import { fetchAPIRede } from "../lib/api";

export default function SecretariaTecnica({
  coordenacao,
  equipeVoluntaria2020,
  equipeDeAssessoriaTecnica,
  equipeVoluntaria2021,
}) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      <Secretarias secretaria={coordenacao} title={"Secretaria Técnica"} />
      <Secretarias secretaria={equipeDeAssessoriaTecnica} title={"Equipe de Assessoria Técnica"}/>
      <Secretarias secretaria={equipeVoluntaria2020} title={"Equipe Voluntária em 2020"}/>
      <Secretarias secretaria={equipeVoluntaria2021} title={"Equipe Voluntária em 2021"}/>
    </div>
  );
}

export async function getStaticProps() {
  const [coordenacao, equipeVoluntaria2020, equipeDeAssessoriaTecnica, equipeVoluntaria2021] =
    await Promise.all([
      fetchAPIRede("/coordenacaos"),
      fetchAPIRede("/equipe-voluntaria-em-2020-s"),
      fetchAPIRede("/equipe-de-assessoria-tecnicas"),
      fetchAPIRede("/equipe-voluntaria-em-2021-s")
    ]);

  return {
    props: { coordenacao, equipeVoluntaria2020, equipeDeAssessoriaTecnica, equipeVoluntaria2021 },
    revalidate: 1,
  };
}
