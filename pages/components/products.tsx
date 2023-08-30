export default function Products({products}:{products:any[]}){
    return<div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Resultados</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Buscar mais
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {products.map(product=>{
                return (<li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={product.coverUrl} alt="Neil image"/>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {product.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {product.description}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {product.price}
                </div>
            </div>
        </li>
                )
            })}
        </ul>
   </div>
</div>
}