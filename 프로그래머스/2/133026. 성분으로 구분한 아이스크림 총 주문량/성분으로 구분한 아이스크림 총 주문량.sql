select 
    ii.ingredient_type as INGREDIENT_TYPE, 
    SUM(fh.total_order) as TOTAL_ORDER
from FIRST_HALF fh
join ICECREAM_INFO ii on ii.flavor = fh.flavor
group by ii.ingredient_type
order by TOTAL_ORDER asc