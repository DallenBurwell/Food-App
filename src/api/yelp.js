import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1bY6f-ZyuDkHdDrphabFFNpLkd1pd-WYe0O-qw_QyuHaoitCBK4PsXp5aId11jYFsC3OWuTWIV5k1q4AUB80bSKZNc1wggPxZCr8Ez8bOeEEjY4_cjChPTzpfEIbX3Yx'
    }
});

