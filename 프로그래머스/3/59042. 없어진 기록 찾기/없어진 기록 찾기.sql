select ao.ANIMAL_ID, ao.NAME
from ANIMAL_OUTS ao
left join ANIMAL_INS ai on ai.animal_id = ao.animal_id
where ai.animal_id is null