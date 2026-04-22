select 
    fd.ORDER_ID, 
    fd.PRODUCT_ID,
    fd.OUT_DATE,
    case when fd.OUT_DATE is null then '출고미정' 
        when DATE '2022-05-01' >= fd.OUT_DATE then '출고완료' 
        else '출고대기' 
    end as '출고여부'
from FOOD_ORDER fd
order by fd.order_id