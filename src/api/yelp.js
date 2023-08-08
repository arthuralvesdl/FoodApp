import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Accept:'application/json',
        Authorization: 'Bearer WX8ECRw7h0KR2pQ6VWHZFRJ8gKXwypUZSv2hHS5QMHIL_pRgwOO69a3iYPPDwZv03G9bE6pac2sXw7_hWxRBL3mgzumsye0binyjGtPfC-9DY5aMGjgL80OnD4SsZHYx'
    }
})
