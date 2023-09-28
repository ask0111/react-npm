import axios from 'axios';

const FetchUsersData = async (page, pageSize, pageFilter, pageSortBy) => {
    
    let paramStr = ''
    if( pageFilter.trim().length > 1 ) {
        paramStr = `&search=${pageFilter}`
    }
    if( pageSortBy.length > 0 ) {
        const sortParams = pageSortBy[0];
        const sortyByDir = sortParams.desc ? 'desc' : 'asc'
        paramStr = `${paramStr}&sortby=${sortParams.id}&direction=${sortyByDir}`
    }
    console.log(pageFilter, 'pageFilter')
    try {
        const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/users?offset=${page * pageSize}&limit=${pageSize}&search=${pageFilter}`
        );
        const results = response.data.users;
        console.log(response, results, 'yaha', response.data.length)
        const data = {
            results: results,
            count: response.data.total_users
        };
        return data;
    } catch (e) {
        throw new Error(`API error:${e?.message}`);
    }
};


export {FetchUsersData}