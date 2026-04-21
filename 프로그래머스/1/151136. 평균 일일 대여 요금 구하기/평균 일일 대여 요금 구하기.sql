select round(avg(crc.daily_fee), 0) as AVERAGE_FEE
from CAR_RENTAL_COMPANY_CAR crc
where crc.CAR_TYPE = 'SUV'