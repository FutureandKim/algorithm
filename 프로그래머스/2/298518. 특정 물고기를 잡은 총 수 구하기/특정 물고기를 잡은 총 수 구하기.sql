select (
    select count(*) as count
    from FISH_INFO fi
    left join FISH_NAME_INFO fni on fni.fish_type = fi.fish_type
    where fni.fish_name = 'BASS'
) 
+
(
    select count(*) as count
    from FISH_INFO fi
    left join FISH_NAME_INFO fni on fni.fish_type = fi.fish_type
    where fni.fish_name = 'SNAPPER'
) as FISH_COUNT