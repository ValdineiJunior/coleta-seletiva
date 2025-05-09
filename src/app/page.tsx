interface CollectionSchedule {
  day: string;
  neighborhoods: string;
}

interface Material {
  type: string;
  examples: string[];
}

const collectionSchedule: CollectionSchedule[] = [
  {
    day: "Segunda-feira",
    neighborhoods:
      "Vila Nova, Centro, Parque Industrial (Maná), Centro de Eventos, São Lucas I e II, Green Valle",
  },
  {
    day: "Terça-feira",
    neighborhoods:
      "Jardim das Palmeiras, Portal do Sol, Três Meninas, Vista Bela, Morada do Vento, Asa Branca, Residencial Carmesin, São Sebastião",
  },
  {
    day: "Quarta-feira*",
    neighborhoods:
      "40 de Baixo, 40 de Cima, São Roque do Pinhal, Pedreira, Colônia São Miguel, Caça e Pesca",
  },
  {
    day: "Quinta-feira",
    neighborhoods:
      "Vila Nova, Centro, Parque Industrial (Maná), Centro de Eventos, São Lucas I e II, Green Valle",
  },
  {
    day: "Sexta-feira",
    neighborhoods:
      "Jardim das Palmeiras, Portal do Sol, Três Meninas, Vista Bela, Morada do Vento, Asa Branca, Residencial Carmesin, São Sebastião",
  },
  {
    day: "Sábado",
    neighborhoods: "Centro",
  },
];

const materials: Material[] = [
  {
    type: "Papéis",
    examples: ["jornais", "revistas", "cadernos", "folhas soltas"],
  },
  {
    type: "Plásticos",
    examples: ["garrafas", "embalagens", "sacos"],
  },
  {
    type: "Vidros",
    examples: ["garrafas", "potes", "frascos"],
  },
  {
    type: "Metais",
    examples: ["latas de alumínio", "latas de aço"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-green-700 mb-2">
            Coleta Seletiva - Joaquim Távora - PR
          </h1>
        </header>

        {/* Main Content Section */}
        <section className="bg-white rounded-lg shadow-md p-3 sm:p-6">
          {/* Collection Schedule */}
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-3 sm:mb-4">
            Cronograma de Coleta
          </h2>
          <div className="overflow-x-auto mb-6 sm:mb-8">
            <div className="min-w-[800px]">
              <table className="w-full bg-white border border-black">
                <thead>
                  <tr className="bg-green-50">
                    {collectionSchedule.map((schedule, index) => (
                      <th
                        key={index}
                        className="py-2 sm:py-3 px-2 sm:px-4 border-b border-r border-black text-left font-semibold text-green-700 text-sm sm:text-base"
                      >
                        {schedule.day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {collectionSchedule.map((schedule, index) => (
                      <td
                        key={index}
                        className="py-2 sm:py-3 px-2 sm:px-4 border-b border-r border-black align-top text-sm sm:text-base"
                      >
                        {schedule.neighborhoods
                          .split(", ")
                          .map((neighborhood, nIndex) => (
                            <div key={nIndex} className="mb-1 sm:mb-2">
                              {neighborhood}
                            </div>
                          ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
            * As coletas de quarta-feira são realizadas quinzenalmente.
          </p>

          {/* Materials Guide */}
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-3 sm:mb-4">
            Como Separar os Materiais
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            Separe os materiais recicláveis em suas respectivas categorias para
            facilitar o processo de reciclagem e contribuir com a preservação do
            meio ambiente.
          </p>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full bg-white border border-black">
                <thead>
                  <tr className="bg-green-50">
                    {materials.map((material, index) => (
                      <th
                        key={index}
                        className="py-2 sm:py-3 px-2 sm:px-4 border-b border-r border-black text-left font-semibold text-green-700 text-sm sm:text-base"
                      >
                        {material.type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {materials.map((material, index) => (
                      <td
                        key={index}
                        className="py-2 sm:py-3 px-2 sm:px-4 border-b border-r border-black align-top text-sm sm:text-base"
                      >
                        {material.examples.map((example, eIndex) => (
                          <div key={eIndex} className="mb-1 sm:mb-2">
                            {example}
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
