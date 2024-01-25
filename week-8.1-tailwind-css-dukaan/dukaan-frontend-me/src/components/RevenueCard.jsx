export const RevenueCard=({
    title,
    orderCount,
    amount
})=>{
    return <div className="bg-white rounded shadow-sn"> {/*https://tailwindcss.com/docs/box-shadow*/}
          <div className="text-gray-700">
            {title}
            ?
          </div>
          <div className="flex justify-between">
            <div>
              ${amount}
            </div>
            <div>
              {orderCount ? <div className="flex">
                <div className="text-blue-700 font-bold text-4xl">
                {orderCount} order(s)
                </div>
                <svg className="fill-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

              </div> : null}
            </div>
          </div>
    </div>
}