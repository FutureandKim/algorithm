with discount_fee as (
    select 
        cc.car_id, 
        cc.car_type,
        (cc.daily_fee * (1-cp.discount_rate*0.01)) * 30 as discount_fee
    from CAR_RENTAL_COMPANY_CAR cc 
    join CAR_RENTAL_COMPANY_DISCOUNT_PLAN cp on 
        cc.car_type = cp.car_type 
        and cp.duration_type = '30일 이상'
),
already_rental as (
    select ch.*
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY ch
    where ch.start_date between '2022-11-01' and '2022-11-30'
    or ch.end_date between '2022-11-01' and '2022-11-30'
    or (ch.start_date <= '2022-11-01' and ch.end_date >= '2022-11-30')
)
select
    distinct(cc.CAR_ID),
    cc.CAR_TYPE,
    discount_fee as FEE
from CAR_RENTAL_COMPANY_CAR cc 
join discount_fee df on 
        cc.car_id = df.car_id
        and df.discount_fee >= 500000 and df.discount_fee < 2000000
where cc.CAR_TYPE in ('세단', 'SUV') 
  and cc.car_id not in (
    select car_id from already_rental
  )
order by discount_fee desc, cc.car_type asc, cc.car_id desc