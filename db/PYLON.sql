SELECT  heCentLines.HELINENUM AS 'A/A',
        heCentLines.HEITEMDESCRIPTION Όνομα,
        heCentLines.HEUSERDEFTEXT05,
        heCentLines.HEITEMCODE,
        heCentLines.HEPRICE
FROM heDocSeries
INNER JOIN heDocEntries
ON heDocSeries.HECOMPID = heDocEntries.HECOMPID AND heDocSeries.HESERIESTYPE = heDocEntries.HEDCSRTYPE AND heDocSeries.HEID = heDocEntries.HEDCSRID
INNER JOIN heCommercialEntries
ON heDocEntries.HEID = heCommercialEntries.HEDENTID
INNER JOIN heCentLines
ON heCommercialEntries.HEDENTID = heCentLines.HEDENTID AND heCommercialEntries.HECOMPID = heCentLines.HECOMPID AND heCommercialEntries.HEID = heCentLines.HECENTID
INNER JOIN heItems
ON heItems.HECOMPID = heCentLines.HECOMPID AND heItems.HEID = heCentLines.HEITEMID
WHERE heCommercialEntries.HEDENTID = 'f704b7f8-d75b-eb11-833d-50e5492134c6' Function CountCcolor(range_data AS range, criteria AS range) AS Long Dim datax AS range Dim xcolor AS Long xcolor = criteria.Interior.ColorIndex For Each datax IN range_data If datax.Interior.ColorIndex = xcolor THEN CountCcolor = CountCcolor + 1 End If Next datax End Function 
-- CONNECTION: name=BIANAME 
--update stuff 
--set TYPE1 = TYPE2 
--where TYPE1 is null; 
--update stuff 
--set TYPE1 = TYPE2 
--where TYPE1 ='Blank'; 
--
SELECT  A B
FROM BIANAME_2.dbo.[1662021CSV_txt]; 
--
SELECT  POID POMODULE PONAME PODESCRIPTION POGROUP PODATA POCREATIONDATE 
--POUPDATEDATE POCREATIONUSRSID POUPDATEUSRSID
FROM BIANAME_2.dbo.POV360 
--
UNION ALL 
--
SELECT  POID POMODULE PONAME PODESCRIPTION POGROUP PODATA POCREATIONDATE 
--POUPDATEDATE POCREATIONUSRSID POUPDATEUSRSID
FROM ΒΙΑΝΑΜΕ.dbo.POV360;

SELECT  t1.HETTOTALVAL [BEFORE],
        t2.HETTOTALVAL [AFTER],
        t1.dbo.heDocEntries.HEDOCCODE,
        t2.dbo.heDocEntries.HEDOCCODE,
        t1.heItems.HECODE,
        t2.dbo.heItems.HECODE
FROM
(BIANAME_2.dbo.heDocEntries
    INNER JOIN BIANAME_2.dbo.heCommercialEntries
    ON BIANAME_2.dbo.heDocEntries.HEID = BIANAME_2.dbo.heCommercialEntries.HEDENTID
    INNER JOIN BIANAME_2.dbo.heCentLines
    ON BIANAME_2.dbo.heCommercialEntries.HEDENTID = BIANAME_2.dbo.heCentLines.HEDENTID AND BIANAME_2.dbo.heCommercialEntries.HECOMPID = BIANAME_2.dbo.heCentLines.HECOMPID AND BIANAME_2.dbo.heCommercialEntries.HEID = BIANAME_2.dbo.heCentLines.HECENTID
    INNER JOIN BIANAME_2.dbo.heItems
    ON BIANAME_2.dbo.heItems.HECOMPID = BIANAME_2.dbo.heCentLines.HECOMPID AND BIANAME_2.dbo.heItems.HEID = BIANAME_2.dbo.heCentLines.HEITEMID
    WHERE BIANAME_2.dbo.heitems.hecode like '2.09.%' 
) AS t1 OUTER APPLY (
SELECT  BIANAME.dbo.heCommercialEntries.HETTOTALVAL [BEFORE],
        BIANAME.dbo.heDocEntries.HEDOCCODE,
        BIANAME.dbo.heItems.HECODE
FROM BIANAME.dbo.heDocEntries
INNER JOIN BIANAME.dbo.heCommercialEntries
ON BIANAME.dbo.heDocEntries.HEID = BIANAME.dbo.heCommercialEntries.HEDENTID
INNER JOIN BIANAME.dbo.heCentLines
ON BIANAME.dbo.heCommercialEntries.HEDENTID = BIANAME.dbo.heCentLines.HEDENTID AND BIANAME.dbo.heCommercialEntries.HECOMPID = BIANAME.dbo.heCentLines.HECOMPID AND BIANAME.dbo.heCommercialEntries.HEID = BIANAME.dbo.heCentLines.HECENTID
INNER JOIN BIANAME.dbo.heItems
ON BIANAME.dbo.heItems.HECOMPID = BIANAME.dbo.heCentLines.HECOMPID AND BIANAME.dbo.heItems.HEID = BIANAME.dbo.heCentLines.HEITEMID
WHERE BIANAME.dbo.heitems.hecode like '2.09.%') AS t2
GROUP BY  BIANAME.dbo.heCommercialEntries.HETTOTALVAL,
          BIANAME.dbo.heDocEntries.HEDOCCODE,
          BIANAME.dbo.heItems.HECODE )
GROUP BY  BIANAME_2.dbo.heCommercialEntries.HETTOTALVAL,
          BIANAME_2.dbo.heDocEntries.HEDOCCODE,
          BIANAME_2.dbo.heItems.HECODE 
--WHERE 
--HEDOCCODE IN （ 
--
SELECT  * 
--FROM @tb_HEDOCCODE） exec sp_addlinkedserver @server = 'BIANAME_2' exec sp_addlinkedserver @server = 'BIANAME' 
--DECLARE @list nvarchar（50） = （'ΔΕΠ-0002535335 ΤΙΑ-0015228758'） 
--
SELECT  id
FROM #test
WHERE col IN （@list） 
-- declare TABLE variable 
--declare @tb_HEDOCCODE table（HEDOCCODE nvarchar（50））; 
--INSERT INTO @tb_HEDOCCODE values （'ΔΕΠ-0002535335'） （'ΤΙΑ-0015228758'） （'ΔΕΠ-0002533542'）;

SELECT  COUNT(*) 
--heCentLines.HETTOTALVAL BEFORE 
--heDocEntries.HEDOCCODE 
--heDocEntries.HEENTRYDATE 
--heDocEntries.HEOFFICIALDATE 
--heItems.HECODE
FROM heDocEntries
INNER JOIN heCommercialEntries
ON heDocEntries.HEID = heCommercialEntries.HEDENTID
INNER JOIN heCentLines
ON heCommercialEntries.HEDENTID = heCentLines.HEDENTID AND heCommercialEntries.HECOMPID = heCentLines.HECOMPID AND heCommercialEntries.HEID = heCentLines.HECENTID
INNER JOIN heItems
ON heItems.HECOMPID = heCentLines.HECOMPID AND heItems.HEID = heCentLines.HEITEMID
WHERE heItems.HECODE Like '2.09.%'
AND heDocEntries.HEENTRYDATE <= '2021/06/30'And heDocEntries.HEOFFICIALDATE <= '2021/06/30' ALTER TABLE ΒΙΑΝΑΜΕ.dbo.bianame_oldDoc_csv ADD ID INT IDENTITY(1, 1) PRIMARY KEY
SELECT  heCentLines.HETTOTALVAL [AFTER],
        heDocEntries.HEDOCCODE [AFTERDOCCODE],
--heDocEntries.HEENTRYDATE 
--heDocEntries.HEOFFICIALDATE
        heItems.HECODE,
        bianame_oldDoc_csv.*
FROM heDocEntries
INNER JOIN heCommercialEntries
ON heDocEntries.HEID = heCommercialEntries.HEDENTID
INNER JOIN heCentLines
ON heCommercialEntries.HEDENTID = heCentLines.HEDENTID AND heCommercialEntries.HECOMPID = heCentLines.HECOMPID AND heCommercialEntries.HEID = heCentLines.HECENTID
INNER JOIN heItems
ON heItems.HECOMPID = heCentLines.HECOMPID AND heItems.HEID = heCentLines.HEITEMID
LEFT JOIN bianame_oldDoc_csv
ON bianame_oldDoc_csv.HEDOCCODE = heDocEntries.HEDOCCODE AND bianame_oldDoc_csv.HECODE = heItems.HECODE
WHERE heItems.HECODE Like '2.09.%'
AND heDocEntries.HEENTRYDATE <= '2021/06/30'And heDocEntries.HEOFFICIALDATE <= '2021/06/30' 
------ 
-- CONNECTION: name=BIANAME_2
SELECT  REPLACE(OLD_DOC.HETTOTALVAL,',','.') AS BEFORE,
        REPLACE(OLD_DOC.HEETOTALVAL,',','.') AS BEFORE2,
        OLD_DOC.HECODESERIES [TYPE],
        heCentLines.HETTOTALVAL [AFTER],
        heCommercialEntries.HEETOTALVAL [AFTER2],
        OLD_DOC.HEDOCCODE1 [BEFOREDOCCODE],
        heDocEntries.HEDOCCODE [AFTERDOCCODE],
        OLD_DOC.HECODE [BEFOREITEMCODE],
        heItems.HECODE [AFTERITEMCODE]
FROM heDocEntries
INNER JOIN heCommercialEntries
ON heDocEntries.HEID = heCommercialEntries.HEDENTID
INNER JOIN heCentLines
ON heCommercialEntries.HEDENTID = heCentLines.HEDENTID AND heCommercialEntries.HECOMPID = heCentLines.HECOMPID AND heCommercialEntries.HEID = heCentLines.HECENTID
INNER JOIN heItems
ON heItems.HECOMPID = heCentLines.HECOMPID AND heItems.HEID = heCentLines.HEITEMID
INNER JOIN heDocSeries
ON heDocEntries.HECOMPID = heDocSeries.HECOMPID AND heDocEntries.HEDCSRTYPE = heDocSeries.HESERIESTYPE AND heDocEntries.HEDCSRID = heDocSeries.HEID
FULL OUTER JOIN OLD_DOC
ON OLD_DOC.HEDOCCODE1 = heDocEntries.HEDOCCODE AND OLD_DOC.HECODE = heItems.HECODE
WHERE heItems.HECODE Like '2.09.%'
AND heDocEntries.HEENTRYDATE <= '2021/06/30'And heDocEntries.HEOFFICIALDATE <= '2021/06/30'
AND (REPLACE(OLD_DOC.HEETOTALVAL, ',', '.') not LIKE heCommercialEntries.HEETOTALVAL) 
------
SELECT  heDocSeries.HECODE [TYPE],
        heCommercialEntries.HEETOTALVAL [AFTER2],
        OLD_DOC.HEDOCCODE1 [BEFOREDOCCODE],
        heDocEntries.HEDOCCODE [AFTERDOCCODE],
        heItems.HECODE [AFTERITEMCODE]
FROM heDocEntries
INNER JOIN heCommercialEntries
ON heDocEntries.HEID = heCommercialEntries.HEDENTID
INNER JOIN heCentLines
ON heCommercialEntries.HEDENTID = heCentLines.HEDENTID AND heCommercialEntries.HECOMPID = heCentLines.HECOMPID AND heCommercialEntries.HEID = heCentLines.HECENTID
INNER JOIN heItems
ON heItems.HECOMPID = heCentLines.HECOMPID AND heItems.HEID = heCentLines.HEITEMID
INNER JOIN heDocSeries
ON heDocEntries.HECOMPID = heDocSeries.HECOMPID AND heDocEntries.HEDCSRTYPE = heDocSeries.HESERIESTYPE AND heDocEntries.HEDCSRID = heDocSeries.HEID
LEFT OUTER JOIN OLD_DOC
ON ( OLD_DOC.HEDOCCODE1 = heDocEntries.HEDOCCODE) AND OLD_DOC.HECODE = heItems.HECODE
WHERE OLD_DOC.HEDOCCODE1 IS NULL
AND heItems.HECODE Like '2.09.%'
AND heDocEntries.HEENTRYDATE <= '2021/06/30'And heDocEntries.HEOFFICIALDATE <= '2021/06/30'
