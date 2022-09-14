import React from 'react'
import ResultItem from './ResultItem'

const ResultList = ({data}) => {

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {
                    data && data.map((e,i) => {
                        return (
                            <>
                            <ResultItem key={i}
                            id={e.id}
                            title={e.title}
                            poster={e.poster_path}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ResultList