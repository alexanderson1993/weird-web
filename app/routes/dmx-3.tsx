import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Channel
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">Total Dimming</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">Red Dimming</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              3
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">Blue Dimming</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              4
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">Green Dimming</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              5
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">White Dimming</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              6
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">Amber Dimming</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              7
            </th>
            <td className="px-6 py-4">0-255</td>
            <td className="px-6 py-4">UV Dimming</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              rowSpan={2}
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              8
            </th>
            <td className="px-6 py-4">0-10</td>
            <td className="px-6 py-4">Lights off</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">11-255</td>
            <td className="px-6 py-4">Strobe speed (slow fast)</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Channel
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              rowSpan={8}
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              9
            </th>
            <td className="px-6 py-4">0-9</td>
            <td className="px-6 py-4">Lights off</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">10-50</td>
            <td className="px-6 py-4">Color mixing mode</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">51-100</td>
            <td className="px-6 py-4">Hopping mode</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">101-150</td>
            <td className="px-6 py-4">Gradient mode</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">151-200</td>
            <td className="px-6 py-4">Mutation pattern</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">201-220</td>
            <td className="px-6 py-4">Jump voice control</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">221-240</td>
            <td className="px-6 py-4">Stroboscopic sound control</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">241-255</td>
            <td className="px-6 py-4">Mutation voice control</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              rowSpan={2}
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              10
            </th>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">Lights off</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">1-255</td>
            <td className="px-6 py-4">Speed (slow to fast)</td>
          </tr>
        </tbody>
      </table>

      <SpeakerNotes>
        Each device gets to define what happens when different values are set on
        its channels. Here's some channel config I pulled from the manual for a
        light like mine. It defines 10 channels, where the first 7 are for
        dimming specific colors of light, but the last 3 let you control
        different effects, like strobe or changing colors with the beat. And DMX
        is not only used for lights, but also smoke machines, motors, and
        outlets.
      </SpeakerNotes>
    </div>
  );
}
