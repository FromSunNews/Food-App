import {
    dummyData
} from '../constants';
const initialState = {
    foodList: dummyData.food,//save all food
    favFood: [],
    filterFood: dummyData.food,
    myCart: [],
    fee: {},
    codeCoupon: dummyData.couponCode,
    confirmCodeCoupon: {},

}
const reducer = (state = initialState, action) => {

    if (action.type == 'addFav') {
        const indexFood = state.favFood.findIndex(item => item.id === action.idFood)

        if (indexFood >= 0) {
            console.log('co san pham nay trong yeu thich')
            //create coppyFood
            const coppyFood = [...state.favFood]
            //delete just find 
            coppyFood.splice(indexFood, 1)
            //return new var state
            console.log(coppyFood)
            return { ...state, favFood: coppyFood }

        }
        else {
            console.log('khong co san pham nay trong yeu thich')
            console.log(action.idFood)
            const food = state.foodList.find(item => item.id === action.idFood)
            //create coppyFood
            let coppyFood = [...state.favFood]
            //delete just find 
            coppyFood = coppyFood.concat(food)
            console.log(coppyFood)
            //return new var state
            return { ...state, favFood: coppyFood }

        }
    }
    if (action.type == 'deleteAllFoods')
        return { ...state, favFood: [] }
    if (action.type == 'addCart') {
        console.log('them vao cart')
        const food = state.foodList.find(item => item.id === action.myCart.idFood)
        //add qty field into food
        const addQtyFood = { ...food, qty: action.myCart.qty, id: state.myCart.length, size: action.myCart.size }
        //create coppyFood
        let coppyFood = [...state.myCart]
        //add just find 
        coppyFood = coppyFood.concat(addQtyFood)
        console.log(coppyFood)
        //return new var state
        return { ...state, myCart: coppyFood }
    }
    if (action.type == 'removeCart') {
        return { ...state, myCart: [] }
    }
    if (action.type == 'DeleteFoodMyCart') {
        console.log('xoa vao cart')
        const index = state.myCart.findIndex(cart => cart.id == action.foodId)
        //create coppyFood
        let coppyFood = [...state.myCart]
        //add just find 
        coppyFood.splice(index, 1)
        console.log(coppyFood)
        //return new var state
        return { ...state, myCart: coppyFood }
    }
    if (action.type == 'FeeMyCart') {
        return { ...state, fee: action.fee }
    }
    if (action.type == 'codeCoupon') {
        const index = state.codeCoupon.findIndex(item => item.code === action.couponCode)
        console.log('coupon')
        if (index >= 0) {
            const coupon = state.codeCoupon.find(item => item.code === action.couponCode)
            console.log(coupon)
            return { ...state, confirmCodeCoupon: coupon }
        }

    }
    if (action.type == 'removeConfirmCouponCode') {

        return { ...state, confirmCodeCoupon: {} }


    }
    return state
}
export default reducer;
