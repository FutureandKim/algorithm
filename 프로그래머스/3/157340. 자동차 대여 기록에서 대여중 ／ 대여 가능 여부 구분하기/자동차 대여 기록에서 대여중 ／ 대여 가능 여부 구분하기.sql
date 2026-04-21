with rental_group as (
    select
        distinct(crc.car_id)
    from car_rental_company_rental_history crc
    where crc.start_date <= '2022-10-16' and crc.end_date >= '2022-10-16'
   )
select
    distinct(crc.car_id) as CAR_ID,
    (case 
        when rg.car_id is null then '대여 가능'
        else '대여중' 
     end) as AVAILABILITY
from car_rental_company_rental_history crc
left join rental_group rg on crc.car_id = rg.car_id
order by CAR_ID desc