import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
export default function AdCompleteChart({percent }){

    const labels = ['section 1', 'section 2'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'تکمیل اطلاعات',
            data: [percent , 100],
            backgroundColor: [

                'rgba(152, 24, 214)',
                'rgba(201, 203, 207)'
            ],
            borderColor: [

                'rgb(152, 24, 214)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 0,
            hoverBorderWidth: 0,
            hoverBorderColor: [
                'rgb(152, 24, 214)',
                'rgb(201, 203, 207)'],
        }]
    };
    return (
        <div className="h-16 w-36 -mb-2 -mr-2 rounded-r-xlarge bg-ad-image bg-cover flex flex-wrap flex-col content-center items-center bg-opacity-50 bg-black">

            <Doughnut
                title="test"
                width="15"
                height="15"
                className="p-2"
                data={data}
                options={{
                    maintainAspectRatio: true,
                    cutout: 20
                }}
            />
            <div className="relative w-full text-center -mt-[2.56rem]  text-[12px] font-bold">
                <span className=" rounded-full p-2 shadow-lg ">{percent}%</span>
            </div>
        </div>
    )
}