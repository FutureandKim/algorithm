with content_count as (
select 
    gb.writer_id as writer_id, 
    count(gb.board_id) as board_count
from USED_GOODS_BOARD gb
group by gb.writer_id
)
select 
    gu.USER_ID,
    gu.NICKNAME,
    concat_ws(' ', gu.city, gu.street_address1, gu.street_address2) as '전체 주소',
    concat(substring(gu.tlno, 1, 3), '-', substring(gu.tlno, 4,4), '-', substring(gu.tlno, 8,4)) as '전화번호'
from USED_GOODS_USER gu
left join content_count cc on gu.user_id = cc.writer_id
where cc.board_count >= 3
order by gu.user_id desc