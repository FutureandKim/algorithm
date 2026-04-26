select ANIMAL_ID, NAME
from ANIMAL_INS
where name like '%EL%' and animal_type = 'Dog'
order by name