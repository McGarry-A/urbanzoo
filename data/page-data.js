export default {
    pageHeading: 'Your 2022/2023 Teams',
    currentSeason: '2022/2023',
    lastUpdated: '2023-01-19T10:13:19.317Z',
    teams: [
        { 
            name: `Men's`,
            slug: `mens`
        },
        {
            name: `Women's`,
            slug: `womens`
        },
        {
            name: `Under 18's`,
            slug: `u18s`
        }
    ],
    
    getTicketLink: (season) => {
        return `/tickets/${season}`;
    }
}