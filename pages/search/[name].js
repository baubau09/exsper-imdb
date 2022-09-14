import React from 'react'
import ResultItem from '../../components/Search/ResultItem'
import ResultList from '../../components/Search/ResultList'


export async function getServerSideProps(context) {
    const movieName = context.params.name;
    const apiurl = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/movies/search/" + movieName
    const res = await fetch(
        apiurl,
        {
            method: 'GET'
        }
    )
    const data = await res.json()

    return {
        props: {data, movieName}, // will be passed to the page component as props
    }
}

const SearchPage = ({data, movieName}) => {
    return (
        <>
            {
                (data && data.length > 0) ? <ResultList data={data}/>
                : <p className="text-white">No results found</p>
            }
        </>
    )
}

export default SearchPage