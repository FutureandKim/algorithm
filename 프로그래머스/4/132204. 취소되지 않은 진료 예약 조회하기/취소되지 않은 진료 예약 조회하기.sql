with not_cancel_apnt as (
    select *
    from APPOINTMENT 
    where apnt_cncl_yn = 'N' and date(apnt_ymd) = '2022-04-13' and mcdp_cd = 'CS'
)
select 
    nc.APNT_NO,
    p.PT_NAME,
    p.PT_NO,
    d.MCDP_CD,
    d.DR_NAME,
    nc.APNT_YMD
from not_cancel_apnt nc
join PATIENT p on nc.pt_no = p.pt_no
join DOCTOR d on d.dr_id = nc.mddr_id
order by nc.apnt_ymd