CREATE DATABASE CairoSales COLLATE Arabic_CI_AI
GO
USE CairoSales
GO

CREATE TABLE Users
(
	UserID  INT NOT NULL IDENTITY(1,1),
	UserName NVARCHAR(500),
	LoginName NVARCHAR(200) UNIQUE,
	UserPass NVARCHAR(200),
	JobClass NVARCHAR(200),
	RequestDate DATE,
	DirectManager INT,
	Approved BIT,
	ApproveUser INT,
	Email NVARCHAR(200),
	Phone NVARCHAR(50)
	CONSTRAINT PK_Users PRIMARY KEY (UserID)
)

CREATE TABLE SalesLines
(
	SalesLineID INT NOT NULL IDENTITY(1,1),
	LineName NVARCHAR(200),
	UserID INT,
	CONSTRAINT PK_SalesLines PRIMARY KEY (SalesLineID)
)

CREATE TABLE Regions
(
	RegionID INT NOT NULL IDENTITY(1,1),
	RegionName NVARCHAR(300),
	ProvinceID NVARCHAR(300),
	Approved BIT,
	ApproveUser INT,
	CONSTRAINT PK_Regions PRIMARY KEY (RegionID)
)

CREATE TABLE UserRegions
(
	UserRegionID INT NOT NULL IDENTITY(1,1),
	RegionID INT,
	UserID INT,
	CONSTRAINT PK_RegionManagers PRIMARY KEY (UserRegionID)
)

CREATE TABLE Gifts
(
	GiftID INT NOT NULL IDENTITY(1,1),
	GiftName NVARCHAR(300),
	CONSTRAINT PK_Gifts PRIMARY KEY (GiftID)
)

CREATE TABLE MediSpecification
(
	SpecID INT NOT NULL IDENTITY(1,1),
	SpecName NVARCHAR(300),
	CONSTRAINT PK_MediSpecification PRIMARY KEY (SpecID)
)

CREATE TABLE VisitImportance
(
	ImpID INT NOT NULL IDENTITY(1,1),
	ImpName NVARCHAR(300),
	VisitsNo INT,
	CONSTRAINT PK_VisitImportance PRIMARY KEY (ImpID)
)

CREATE TABLE Drugs
(
	DrugID INT NOT NULL IDENTITY(1,1),
	DrugName NVARCHAR(300),
	Description NVARCHAR(max),
	CONSTRAINT PK_Drugs PRIMARY KEY (DrugID)
)

CREATE TABLE Destinations
(
	DestID INT NOT NULL IDENTITY(1,1),
	Destination NVARCHAR(500),
	DestType NVARCHAR(100),
	[Address] NVARCHAR(max),
	RegionID INT,
	MedSpecID INT,
	VisitImpID INT,
	CreateUser INT,
	ApproveUser INT,
	Approved BIT DEFAULT (0)
	CONSTRAINT PK_Destinations PRIMARY KEY (DestID)
)

CREATE TABLE Visits
(
	VisitID INT NOT NULL IDENTITY(1,1),
	VisitDate DATE NOT NULL,
	VisitTime TIME NOT NULL,
	DestID INT,
	UserID INT,
	CONSTRAINT PK_Visits PRIMARY KEY (VisitID)
)

CREATE TABLE VisitDrugs
(
	VisitID INT NOT NULL,
	DrugID INT NOT NULL,
	Comment NVARCHAR(max),
	Gift NVARCHAR(max),
	CONSTRAINT PK_VisitDrugss PRIMARY KEY (VisitID, DrugID)
)
CREATE TABLE VisitGifts
(
	VisitID INT NOT NULL,
	GiftID INT NOT NULL,
	Qty INT,
	CONSTRAINT PK_VisitGifts PRIMARY KEY (VisitID, GiftID)
)
GO
ALTER TABLE SalesLines ADD CONSTRAINT FK_SalesLines_Users FOREIGN KEY (UserID) REFERENCES Users(UserID)
ALTER TABLE UserRegions ADD CONSTRAINT FK_RegionManagers_Users FOREIGN KEY (UserID) REFERENCES Users(UserID)
ALTER TABLE UserRegions ADD CONSTRAINT FK_RegionManagers_Regions FOREIGN KEY (RegionID) REFERENCES Regions(RegionID)
ALTER TABLE Destinations ADD CONSTRAINT FK_Destinations_Regions FOREIGN KEY (RegionID) REFERENCES Regions(RegionID)
ALTER TABLE Destinations ADD CONSTRAINT FK_Destinations_VisitImportance FOREIGN KEY (VisitImpID) REFERENCES VisitImportance(ImpID)
ALTER TABLE Destinations ADD CONSTRAINT FK_Destinations_MediSpecification FOREIGN KEY (MedSpecID) REFERENCES MediSpecification(SpecID)
ALTER TABLE Visits  ADD CONSTRAINT FK_Visits_Destinations FOREIGN KEY (DestID) REFERENCES Destinations(DestID)
ALTER TABLE Visits  ADD CONSTRAINT FK_Visits_Users FOREIGN KEY (UserID) REFERENCES Users(UserID)
ALTER TABLE VisitDrugs  ADD CONSTRAINT FK_VisitDrugs_Visits FOREIGN KEY (VisitID) REFERENCES Visits(VisitID)
ALTER TABLE VisitDrugs  ADD CONSTRAINT FK_VisitDrugs_Drugs FOREIGN KEY (DrugID) REFERENCES Drugs(DrugID)
ALTER TABLE VisitGifts  ADD CONSTRAINT FK_VisitGifts_Visits FOREIGN KEY (VisitID) REFERENCES Visits(VisitID)
ALTER TABLE VisitGifts  ADD CONSTRAINT FK_VisitGifts_Gifts FOREIGN KEY (GiftID) REFERENCES Gifts(GiftID)
GO

INSERT dbo.Users
        ( UserName ,LoginName ,UserPass ,JobClass ,RequestDate ,DirectManager ,Approved ,ApproveUser )
VALUES  ( N'Ahmed Ades' , N'A.Ades' ,N'225182' , N'SysAdmin' , '2016-11-09' , NULL , 1 , NULL ),
		( N'Sina - IDA Line Manager', N'S.Manager', N'123456', N'Line Manager', CAST(N'2016-11-09' AS Date), 1, 1, 1 ),
		( N'IDI Line Manager', N'I.Manager', N'123456', N'Line Manager', CAST(N'2016-11-09' AS Date), 1, 1, 1 )

INSERT dbo.SalesLines ( LineName, UserID )
VALUES  ( N'RGU', 1 ), (N'PCU', 2 )

GO          

CREATE PROC UserInsert 
@UserName nvarchar(500), @LoginName nvarchar(200), @UserPass nvarchar(200), @JobClass nvarchar(200), @DirectManager INT, @Email nvarchar(200), @Phone nvarchar(50) AS
INSERT dbo.Users
        ( UserName ,LoginName ,UserPass ,JobClass, Approved, RequestDate, DirectManager, Email, Phone )
VALUES  ( @UserName, @LoginName, @UserPass, @JobClass, 0, CAST(GETDATE() AS DATE), @DirectManager, @Email, @Phone )
SELECT @@IDENTITY AS UserID
GO

CREATE PROC UserUpdate
@UserID INT,@UserName nvarchar(500), @LoginName nvarchar(200), @UserPass nvarchar(200), @JobClass nvarchar(200), @Email nvarchar(200), @Phone nvarchar(50) AS
UPDATE dbo.Users SET UserName=@UserName, LoginName=@LoginName, UserPass=@UserPass, JobClass=@JobClass, Email=@Email, Phone=@Phone
WHERE UserID = @UserID
GO
CREATE PROC UserDelete 
@UserID INT AS
DELETE dbo.Users WHERE UserID = @UserID AND JobClass != 'Line Manager'
GO
CREATE PROC AuthenticateUser
@LoginName nvarchar(200), @UserPass nvarchar(200) AS
IF EXISTS (SELECT * FROM dbo.Users WHERE LoginName = @LoginName AND UserPass = @UserPass)
BEGIN
	SELECT UserID, UserName, JobClass, Approved, REPLACE(UserName, ' ', '') + '-' + REPLACE(JobClass, ' ', '') + '-' + CONVERT(NVARCHAR(11), RequestDate, 103) AS token 
	FROM dbo.Users WHERE LOWER(LoginName) = LOWER(@LoginName) AND LOWER(UserPass) = LOWER(@UserPass)
END
ELSE
BEGIN
	SELECT 'Error 401 UserName or Login Do Not match' AS Error
END
GO
CREATE PROC UserApprove
@UserID INT , @ApproveUser INT AS
UPDATE dbo.Users SET Approved = 1, ApproveUser = @ApproveUser WHERE UserID = @UserID
GO

CREATE PROC SalesLinesInsert 
@LineName nvarchar(200), @UserID INT AS
INSERT dbo.SalesLines
        ( LineName, UserID )
VALUES  ( @LineName, @UserID )
GO
CREATE PROC SalesLinesUpdate
@SalesLineID INT, @LineName nvarchar(200), @UserID INT AS
UPDATE dbo.SalesLines SET LineName = @LineName, UserID = @UserID WHERE SalesLineID=@SalesLineID
GO
CREATE PROC SalesLinesDelete
@SalesLineID INT AS
DELETE dbo.SalesLines WHERE SalesLineID = @SalesLineID
GO

CREATE PROC RegionsInsert 
@RegionName nvarchar(300), @ProvinceID nvarchar(300) AS
INSERT dbo.Regions
        ( RegionName, ProvinceID )
VALUES  ( @RegionName, @ProvinceID )
GO
CREATE PROC RegionsUpdate
@RegionID INT, @RegionName nvarchar(200), @ProvinceID nvarchar(300) AS
UPDATE dbo.Regions SET RegionName = @RegionName, ProvinceID = @ProvinceID WHERE RegionID=@RegionID
GO
CREATE PROC RegionsDelete
@RegionID INT AS
DELETE dbo.Regions WHERE RegionID = @RegionID
GO

CREATE PROC RegionApprove
@RegionID INT , @ApproveUser INT AS
UPDATE dbo.Regions SET Approved = 1, ApproveUser = @ApproveUser WHERE RegionID = @RegionID
GO

CREATE PROC GiftInsert
@GiftName NVARCHAR(300) AS
INSERT dbo.Gifts ( GiftName )
VALUES  ( @GiftName )
GO
CREATE PROC GiftUpdate
@GiftID INT , @GiftName NVARCHAR(300) AS
UPDATE dbo.Gifts SET GiftName = @GiftName WHERE GiftID = @GiftID
GO
CREATE PROC GiftDelete
@GiftID INT AS
DELETE dbo.Gifts  WHERE GiftID = @GiftID
GO

CREATE PROC MedSpecInsert
@SpecName NVARCHAR(300) AS
INSERT dbo.MediSpecification ( SpecName )
VALUES  ( @SpecName )
GO
CREATE PROC MedSpecUpdate
@SpecID INT , @SpecName NVARCHAR(300) AS
UPDATE dbo.MediSpecification SET SpecName = @SpecName WHERE SpecID = @SpecID
GO
CREATE PROC MedSpecDelete
@SpecID INT AS
DELETE dbo.MediSpecification WHERE SpecID = @SpecID
GO

CREATE PROC VisitImportanceInsert
@ImpName NVARCHAR(300), @VisitsNo INT AS
INSERT dbo.VisitImportance ( ImpName, VisitsNo )
VALUES  ( @ImpName, @VisitsNo )
GO
CREATE PROC VisitImportanceUpdate
@ImpID INT , @ImpName NVARCHAR(300), @VisitsNo INT AS
UPDATE dbo.VisitImportance SET ImpName = @ImpName, VisitsNo=@VisitsNo WHERE ImpID = @ImpID
GO
CREATE PROC VisitImportanceDelete
@ImpID INT AS
DELETE dbo.VisitImportance WHERE ImpID = @ImpID
GO

CREATE PROC DrugInsert
@DrugName NVARCHAR(300), @Description NVARCHAR(max) AS
INSERT dbo.Drugs ( DrugName, Description )
VALUES  ( @DrugName, @Description )
GO
CREATE PROC DrugUpdate
@DrugID INT , @DrugName NVARCHAR(300), @Description NVARCHAR(max) AS
UPDATE dbo.Drugs SET DrugName = @DrugName, Description=@Description WHERE DrugID = @DrugID
GO
CREATE PROC DrugDelete
@DrugID INT AS
DELETE dbo.Drugs WHERE DrugID = @DrugID
GO

CREATE PROC UserRegionInsert
@RegionID INT, @UserID INT
AS
INSERT dbo.UserRegions ( RegionID, UserID )
VALUES  ( @RegionID, @UserID )
GO

CREATE PROC UserRegionDelete
@UserID INT
AS
DELETE dbo.UserRegions WHERE UserID = @UserID
GO

CREATE PROC UserChain 
@UserID INT AS
SELECT * FROM dbo.Users Where DirectManager = @UserID
UNION 
SELECT * FROM dbo.Users WHERE DirectManager IN	(SELECT UserID FROM dbo.Users Where DirectManager = @UserID)
UNION 
SELECT * FROM dbo.Users WHERE DirectManager IN	(SELECT UserID FROM dbo.Users WHERE DirectManager IN 
												(SELECT UserID FROM dbo.Users Where DirectManager = @UserID))
UNION 
SELECT * FROM dbo.Users WHERE DirectManager IN	(SELECT UserID FROM dbo.Users WHERE DirectManager IN 
												(SELECT UserID FROM dbo.Users WHERE DirectManager IN 
												(SELECT UserID FROM dbo.Users Where DirectManager = @UserID)))
GO
CREATE Function fncUserChain ( @UserID INT )
RETURNS TABLE 
RETURN
SELECT * FROM dbo.Users Where DirectManager = @UserID
UNION 
SELECT * FROM dbo.Users WHERE DirectManager IN	(SELECT UserID FROM dbo.Users Where DirectManager = @UserID)
UNION 
SELECT * FROM dbo.Users WHERE DirectManager IN	(SELECT UserID FROM dbo.Users WHERE DirectManager IN 
												(SELECT UserID FROM dbo.Users Where DirectManager = @UserID))
UNION 
SELECT * FROM dbo.Users WHERE DirectManager IN	(SELECT UserID FROM dbo.Users WHERE DirectManager IN 
												(SELECT UserID FROM dbo.Users WHERE DirectManager IN 
												(SELECT UserID FROM dbo.Users Where DirectManager = @UserID)))
GO

CREATE PROC DestinationInsert
@Destination nvarchar(500),@DestType nvarchar(100), @Address nvarchar(max),@RegionID int,
@MedSpecID INT,@VisitImpID INT, @CreateUser int	
AS
INSERT dbo.Destinations
        ( Destination ,DestType ,Address ,RegionID ,MedSpecID ,VisitImpID, CreateUser )
VALUES  ( @Destination ,@DestType ,@Address ,@RegionID ,@MedSpecID ,@VisitImpID, @CreateUser )
GO

CREATE PROC DestinationUpdate
@DestID INT,@Destination nvarchar(500),@DestType nvarchar(100), @Address nvarchar(max),@RegionID int,@MedSpecID INT,@VisitImpID INT
, @CreateUser int
AS
UPDATE dbo.Destinations SET Destination=@Destination, DestType=@DestType, Address=@Address, RegionID=@RegionID,
	MedSpecID=@MedSpecID,VisitImpID=@VisitImpID , CreateUser = @CreateUser
WHERE DestID=@DestID
GO

CREATE PROC DestinationDelete
@DestID INT AS
DELETE dbo.Destinations WHERE DestID=@DestID
GO

CREATE PROC DestinationApprove
@DestID INT, @ApproveUser INT AS
Update dbo.Destinations SET Approved=1, ApproveUser=@ApproveUser WHERE DestID=@DestID
GO

CREATE VIEW vwDestinations
AS
SELECT d.*, r.RegionName, r.ProvinceID, m.SpecName, v.ImpName, v.VisitsNo 
FROM dbo.Destinations d 
JOIN dbo.Regions r ON d.RegionID = r.RegionID 
JOIN dbo.VisitImportance v ON	d.VisitImpID = v.ImpID
LEFT JOIN dbo.MediSpecification m ON d.MedSpecID = m.SpecID
GO

CREATE PROC VisitInsert
@VisitDate DATE ,@VisitTime TIME, @DestID INT, @UserID INT AS
INSERT dbo.Visits ( VisitDate, VisitTime, DestID, UserID )
VALUES  ( @VisitDate, @VisitTime, @DestID, @UserID )
SELECT @@IDENTITY AS VisitID
GO

CREATE PROC VisitsUpdate
@VisitID INT, @VisitDate DATE ,@VisitTime TIME, @DestID INT, @UserID INT AS 
UPDATE dbo.Visits SET VisitDate=@VisitDate, VisitTime=@VisitTime, DestID=@DestID, UserID = @UserID WHERE VisitID=@VisitID
GO

CREATE PROC VisitDelete
@VisitID INT AS 
DELETE dbo.VisitGifts WHERE VisitID = @VisitID
DELETE dbo.VisitDrugs WHERE VisitID = @VisitID
DELETE dbo.Visits WHERE VisitID=@VisitID
GO

CREATE PROC VisitDrugsInsert
@VisitID INT, @DrugID INT, @Comment NVARCHAR(max), @Gift NVARCHAR(max) AS
INSERT dbo.VisitDrugs ( VisitID, DrugID, Comment, Gift )
VALUES  ( @VisitID, @DrugID, @Comment, @Gift )
GO

CREATE PROC	VisitDrugsDelete
@VisitID INT AS 
DELETE dbo.VisitDrugs WHERE VisitID =@VisitID
GO

CREATE PROC VisitGiftInsert
@VisitID INT, @GiftID INT, @Quant INT AS
INSERT dbo.VisitGifts ( VisitID, GiftID, Qty )
VALUES  ( @VisitID, @GiftID, @Quant)
GO

CREATE PROC	VisitGiftDelete
@VisitID INT AS 
DELETE dbo.VisitGifts WHERE VisitID =@VisitID
GO

--DECLARE @UserID INT = 1
--SELECT v.*, d.Destination, d.DestType, d.Address, d.RegionName, d.ProvinceID, d.SpecName, d.ImpName, d.VisitsNo, u.UserName
--FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID
--JOIN dbo.Users u ON v.UserID = u.UserID
--WHERE v.UserID IN (SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID))

--SELECT DISTINCT ur.RegionID,r.RegionName,r.ProvinceID 
--FROM dbo.UserRegions ur Join dbo.Regions r on ur.RegionID = r.RegionID 
--Where UserID IN (SELECT 1 UNION SELECT UserID FROM dbo.fncUserChain(1))


CREATE VIEW vwVisitSchedule
AS
SELECT  d.DestID , Destination , DestType , Address , RegionID ,
        MedSpecID , VisitImpID , CreateUser , ApproveUser ,
        Approved , RegionName , ProvinceID , SpecName , ImpName ,
        VisitsNo , ISNULL(VisitDate, '') VisitDate, ISNULL(visCount, 0) visCount,
		VisitsNo - ISNULL(visCount, 0) AS RemVisits,
		1 - CAST((CASE WHEN CAST(ISNULL(visCount, 0) AS DECIMAL(5,2))  /  VisitsNo > 1 
					THEN 1 
					ELSE CAST(ISNULL(visCount, 0) AS DECIMAL(5,2))  /  VisitsNo 
				  END)AS DECIMAL(5,2)) AS visLossPercent
from dbo.vwDestinations d
LEFT JOIN (SELECT DestID, FORMAT(VisitDate, 'MM-yyyy') VisitDate, COUNT(VisitID) visCount FROM dbo.Visits 
		GROUP BY DestID, FORMAT(VisitDate, 'MM-yyyy')
	  ) v ON d.DestID = v.DestID
WHERE Approved = 1
GO

CREATE PROC prcUserMonthVisitsReport (@UserID INT, @Month INT)
AS
DECLARE @strt DATE = DateFromParts(YEAR(GETDATE()), @Month, 1), @end DATE= DATEADD(DAY, -1, DATEADD(MONTH,1, DateFromParts(YEAR(GETDATE()), @Month, 1)))
;with  DayRecursive as (
select @strt as DayDate ,1 as [level]
union all
select DATEADD(DAY,level, @strt),[level]+1 from  DayRecursive where DATEADD(DAY,level, @strt)<=@end)
SELECT DayDate, qry.visCount 
from DayRecursive d
LEFT JOIN (SELECT VisitDate, CONVERT(NVARCHAR(12), VisitDate, 103) cnvVisitDate, COUNT(VisitID) visCount 
FROM dbo.Visits WHERE UserID = @UserID GROUP BY VisitDate) qry ON d.DayDate = qry.VisitDate;
GO

CREATE PROC prcUserChainMonthVisitsReport (@UserID INT, @Month INT)
AS
DECLARE @strt DATE = DateFromParts(YEAR(GETDATE()), @Month, 1), @end DATE= DATEADD(DAY, -1, DATEADD(MONTH,1, DateFromParts(YEAR(GETDATE()), @Month, 1)))
;WITH  DayRecursive as (
SELECT @strt as DayDate ,1 as [level]
UNION all
SELECT DATEADD(DAY,level, @strt),[level]+1 from  DayRecursive where DATEADD(DAY,level, @strt)<=@end)
SELECT u.UserID, DayDate, qry.visCount 
from DayRecursive d
CROSS JOIN dbo.Users u
LEFT JOIN (SELECT UserID, VisitDate, CONVERT(NVARCHAR(12), VisitDate, 103) cnvVisitDate, COUNT(VisitID) visCount 
FROM dbo.Visits GROUP BY UserID, VisitDate) qry ON d.DayDate = qry.VisitDate AND u.UserID = qry.UserID
WHERE u.UserID IN (SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID))
ORDER BY userId,DayDate;
GO