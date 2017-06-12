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
	Phone NVARCHAR(50),
	SalesLineID INT,
	[Disabled] BIT DEFAULT (0),
	CONSTRAINT PK_Users PRIMARY KEY (UserID)
)
CREATE TABLE UserLogHistory(
	UserID INT,
	LogDate DATETIME
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
	IMSID INT,
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
	SalesLineID INT,
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
	Approved BIT DEFAULT (0),
	IMSID INT,
	CONSTRAINT PK_Destinations PRIMARY KEY (DestID)
)
CREATE TABLE stgDrList
(
	ID INT IDENTITY(1,1),
	RepName NVARCHAR(600),
	CustomerName NVARCHAR(600),
	[Address] NVARCHAR(max),
	Region NVARCHAR(600),
	Province NVARCHAR(600),
	Class NVARCHAR(600),
	Speciality NVARCHAR(600),
	FILENAME NVARCHAR(600)
)
CREATE TABLE Visits
(
	VisitID INT NOT NULL IDENTITY(1,1),
	VisitDate DATE NOT NULL,
	VisitTime TIME NOT NULL,
	DestID INT,
	UserID INT,
	GeneralComment NVARCHAR(max),
	VisitType NVARCHAR(100),
	AccompanyID INT,
	CreateDate DATETIME DEFAULT GETDATE(),
	CONSTRAINT PK_Visits PRIMARY KEY (VisitID)
)
CREATE TABLE VisitDrugs
(
	VisitID INT NOT NULL,
	DrugID INT NOT NULL,
	Comment NVARCHAR(max),
	Gift NVARCHAR(max),
	CONSTRAINT PK_VisitDrugs PRIMARY KEY (VisitID, DrugID)
)
CREATE TABLE PromoTools
(
	ToolID INT NOT NULL IDENTITY(1,1),
	ToolName NVARCHAR(500),
	GiftID INT,
	DrugID INT,
	CONSTRAINT PK_PromoTools PRIMARY KEY (ToolID)
)
CREATE TABLE VisitGifts
(
	VisitID INT NOT NULL,
	ToolID INT NOT NULL,
	Qty INT,
	CONSTRAINT PK_VisitGifts PRIMARY KEY (VisitID, ToolID)
)
CREATE TABLE JobClass
(
	ClassID INT NOT NULL,
	JobClass NVARCHAR(200),
	CONSTRAINT PK_JobClass PRIMARY KEY (JobClass)
)
CREATE TABLE MonthPlan
(
	PlanID INT NOT NULL IDENTITY(1,1),
	FromDate DATE,
	ToDate Date,	
	PlanName NVARCHAR(200),
	SalesLineID INT,
	CreateDate DATETIME DEFAULT GETDATE(),
	CONSTRAINT PK_MonthPlan PRIMARY KEY (PLanID)
)
CREATE TABLE PlanSpecs
(
	PlanID INT,
	SpecID INT,
	CONSTRAINT PK_MonthPlanSpecs PRIMARY KEY (PLanID, SpecID)
)
CREATE TABLE PlanImp
(
	PlanID INT,
	ImpID INT,	
	CONSTRAINT PK_MonthPlanImp PRIMARY KEY (PLanID, ImpID)
)
CREATE TABLE PlanDrugs
(
	PlanID INT,
	DrugID INT,
	CONSTRAINT PK_MonthPlanDrugs PRIMARY KEY (PLanID, DrugID)
)
CREATE TABLE IMSData
(
	IMSID INT NOT NULL IDENTITY(1,1),
	IMS NVARCHAR(150),
	CONSTRAINT PK_IMS PRIMARY KEY (IMSID)
)
CREATE TABLE UserDestinations
(
	UserID INT,
	DestID INT,
	CONSTRAINT PK_UserDestinations PRIMARY KEY (UserID, DestID)
)
CREATE TABLE stgUserDestinations
(
	UserID INT, DestID INT
)
CREATE TABLE UserVacations (
	VacID INT NOT NULL IDENTITY(1,1),
	FromDate DATE,
	ToDate DATE,
	UserID INT,
	VacType NVARCHAR(50),
	Notes NVARCHAR(max),
	CONSTRAINT PK_UserVacations PRIMARY KEY (VacID)
)
CREATE TABLE ContactUs
(
	ID INT IDENTITY(1,1) NOT NULL,
	UserID INT,
	CreateDate DATETIME,
	IssueType NVARCHAR(50),
	Title NVARCHAR(300),
	IDescription NVARCHAR(max),
	Solved BIT,
	SolveDate DATE,
	CONSTRAINT PK_ContactUs PRIMARY KEY (ID)
)
CREATE TABLE EventLog
(
	EventID INT IDENTITY(1,1) NOT NULL,
	EventDate DATETIME2,
	FormName NVARCHAR(50),
	UserID INT,
	ChangeType NVARCHAR(50),
	ObjectID INT
)
GO

ALTER TABLE dbo.Users ADD CONSTRAINT FK_Users_SalesLines FOREIGN KEY (SalesLineID) REFERENCES dbo.SalesLines(SalesLineID)
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
ALTER TABLE VisitGifts  ADD CONSTRAINT FK_VisitGifts_PromoTools FOREIGN KEY (ToolID) REFERENCES dbo.PromoTools(ToolID)
ALTER TABLE dbo.Drugs ADD CONSTRAINT FK_Drugs_SalesLines FOREIGN KEY (SalesLineID)  REFERENCES dbo.SalesLines(SalesLineID)
ALTER TABLE dbo.PromoTools ADD CONSTRAINT FK_PromoTools_Gifts FOREIGN KEY (GiftID) REFERENCES dbo.Gifts(GiftID) 
ALTER TABLE dbo.PromoTools ADD CONSTRAINT FK_PromoTools_Drugs FOREIGN KEY (DrugID) REFERENCES dbo.Drugs(DrugID) 
ALTER TABLE dbo.MonthPlan ADD CONSTRAINT FK_MonthPlan_SalesLines FOREIGN KEY (SalesLineID)  REFERENCES dbo.SalesLines(SalesLineID)
ALTER TABLE PlanSpecs ADD CONSTRAINT FK_PlanSpecs_MonthPlan FOREIGN KEY (PlanID) REFERENCES dbo.MonthPlan(PlanID) 
ALTER TABLE PlanSpecs ADD CONSTRAINT FK_PlanSpecs_MediSpec FOREIGN KEY (SpecID) REFERENCES dbo.MediSpecification(SpecID) 
ALTER TABLE PlanImp ADD CONSTRAINT FK_PlanImp_MonthPlan FOREIGN KEY (PlanID) REFERENCES dbo.MonthPlan(PlanID) 
ALTER TABLE PlanImp ADD CONSTRAINT FK_PlanImp_Importance FOREIGN KEY (ImpID) REFERENCES dbo.VisitImportance(ImpID) 
ALTER TABLE PlanDrugs ADD CONSTRAINT FK_PlanDrugs_MonthPlan FOREIGN KEY (PlanID) REFERENCES dbo.MonthPlan(PlanID) 
ALTER TABLE PlanDrugs ADD CONSTRAINT FK_PlanDrugs_Drugs FOREIGN KEY (DrugID) REFERENCES dbo.Drugs(DrugID) 
ALTER TABLE dbo.Destinations ADD CONSTRAINT FK_Destinations_IMS FOREIGN KEY (IMSID) REFERENCES dbo.IMSData(IMSID)
ALTER TABLE dbo.Regions ADD CONSTRAINT FK_Regions_IMS FOREIGN KEY (IMSID) REFERENCES dbo.IMSData(IMSID)
ALTER TABLE UserVacations ADD CONSTRAINT FK_UserVacations_Users FOREIGN KEY (UserID) REFERENCES dbo.Users(UserID)
ALTER TABLE UserDestinations ADD CONSTRAINT FK_UserDestinations_Users FOREIGN KEY (UserID) REFERENCES dbo.Users(UserID)
ALTER TABLE UserDestinations ADD CONSTRAINT FK_UserDestinations_Destination FOREIGN KEY (DestID) REFERENCES dbo.Destinations(DestID)
--ALTER TABLE dbo.Users ADD CONSTRAINT DFT_Users_Disabled DEFAULT 0 FOR [Disabled] 
ALTER TABLE dbo.Visits ADD CONSTRAINT Unq_Visits UNIQUE (UserID, VisitDate, DestID)
GO

INSERT dbo.Users
        ( UserName ,LoginName ,UserPass ,JobClass ,RequestDate ,DirectManager ,Approved ,ApproveUser, Disabled )
VALUES  ( N'Ahmed Ades' , N'A.Ades' ,N'225182' , N'SysAdmin' , '2016-11-09' , NULL , 1 , NULL, DEFAULT ),
		( N'Mohamed Nasr' , N'm.nasr' ,N'123456' , N'Line Manager' , '2016-11-09' , 1 , 1 , NULL, DEFAULT ),
		( N'Mohamed Abdel-Elah' , N'm.abdelelah' ,N'123456' , N'Line Manager' , '2016-11-09' , 1 , 1 , NULL, DEFAULT )

INSERT dbo.SalesLines ( LineName, UserID )
VALUES  ( N'RGU', 1 ), (N'PCU', 2 )
GO          

CREATE PROC UserInsert 
@UserName nvarchar(500), @LoginName nvarchar(200), @UserPass nvarchar(200), @JobClass nvarchar(200), 
@DirectManager INT, @Email nvarchar(200), @Phone nvarchar(50), @SalesLineID INT AS
INSERT dbo.Users
        ( UserName ,LoginName ,UserPass ,JobClass, Approved, RequestDate, DirectManager, Email, Phone, SalesLineID, Disabled )
VALUES  ( @UserName, @LoginName, @UserPass, @JobClass, 0, CAST(GETDATE() AS DATE), @DirectManager, @Email, @Phone, @SalesLineID, DEFAULT )
SELECT @@IDENTITY AS UserID
GO

CREATE PROC UserUpdate
@UserID INT,@UserName nvarchar(500), @LoginName nvarchar(200), @UserPass nvarchar(200), @JobClass nvarchar(200), 
@DirectManager INT, @Email nvarchar(200), @Phone nvarchar(50), @SalesLineID INT AS
UPDATE dbo.Users SET UserName=@UserName, LoginName=@LoginName, UserPass=@UserPass, JobClass=@JobClass, DirectManager=@DirectManager, Email=@Email, Phone=@Phone,
SalesLineID = @SalesLineID
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
	INSERT dbo.UserLogHistory ( UserID, LogDate )
	SELECT UserID, GETDATE() FROM dbo.Users WHERE LOWER(LoginName) = LOWER(@LoginName) AND LOWER(UserPass) = LOWER(@UserPass) 

	SELECT UserID, UserName, JobClass, Approved, REPLACE(LoginName, ' ', '') + '-' + REPLACE(JobClass, ' ', '') + '-' + CONVERT(NVARCHAR(11), RequestDate, 103) AS token 
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
CREATE PROC UserDisable
@UserID INT AS 
UPDATE dbo.Users SET Disabled = 1 WHERE UserID=@UserID
DELETE dbo.UserDestinations WHERE UserID = @UserID
GO
CREATE PROC UserChangePass
@UserID INT, @NewPass NVARCHAR(200) AS 
UPDATE dbo.Users SET UserPass = @NewPass WHERE UserID=@UserID
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
INSERT dbo.Regions ( RegionName, ProvinceID )
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
@DrugName NVARCHAR(300), @Description NVARCHAR(max), @SalesLineID INT AS
INSERT dbo.Drugs ( DrugName, Description, SalesLineID )
VALUES  ( @DrugName, @Description, @SalesLineID )
GO
CREATE PROC DrugUpdate
@DrugID INT , @DrugName NVARCHAR(300), @Description NVARCHAR(max), @SalesLineID INT AS
UPDATE dbo.Drugs SET DrugName = @DrugName, Description=@Description, SalesLineID=@SalesLineID WHERE DrugID = @DrugID
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

CREATE PROC UserDestinationInsert
@DestID INT, @UserID INT
AS
INSERT dbo.UserDestinations ( DestID, UserID )
VALUES  ( @DestID, @UserID )
GO

CREATE PROC UserDestinationDelete
@DestID INT
AS
DELETE dbo.UserDestinations WHERE DestID = @DestID
GO
CREATE PROC procUserIMS (@UserID INT)
AS
	SELECT DISTINCT ims.* FROM dbo.IMSData ims JOIN dbo.Destinations d ON ims.IMSID = d.IMSID 
	JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID JOIN dbo.Users u ON ud.UserID = u.UserID
	WHERE u.UserID IN (SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID))
GO

CREATE FUNCTION fncUserIMS (@UserID INT)
RETURNS NVARCHAR(max)
AS
BEGIN
	DECLARE @IMS VARCHAR(max),@Output NVARCHAR(max)=''
	DECLARE IMSCur CURSOR FAST_FORWARD
	FOR 
		SELECT DISTINCT ims.IMS FROM dbo.IMSData ims JOIN dbo.Destinations d ON ims.IMSID = d.IMSID 
		JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID JOIN dbo.Users u ON ud.UserID = u.UserID
		WHERE u.UserID = @UserID
	OPEN IMSCur	
	FETCH IMSCur INTO @IMS

	WHILE @@FETCH_STATUS = 0
	BEGIN
		SET @Output += @IMS + ' , '
		FETCH IMSCur INTO @IMS
	END
	DEALLOCATE IMSCur
	IF (@Output != '')
		SET @Output = SUBSTRING(@Output, 1, LEN(@Output) - 2)
	RETURN @Output
END
GO

CREATE PROC UserChain 
@UserID INT AS
DECLARE @Class NVARCHAR(50) = (SELECT JobClass FROM dbo.Users WHERE UserID=@UserID)
IF(@Class = 'SysAdmin')
BEGIN
	SELECT  u.*, u2.UserName AS DirectManagerName, sl.LineName, ims.IMS
	FROM dbo.Users u JOIN dbo.Users u2 ON u2.UserID = u.DirectManager JOIN dbo.SalesLines sl ON u.SalesLineID = sl.SalesLineID
	LEFT JOIN (SELECT UserID, (SELECT dbo.fncUserIMS(UserID)) IMS FROM dbo.Users ) ims ON u.UserID = ims.UserID
	WHERE u.UserID != @UserID AND u.Disabled <> 1
END
ELSE IF(@Class = 'Managers View')
BEGIN
	SELECT  u.*, u2.UserName AS DirectManagerName, sl.LineName, ims.IMS
	FROM dbo.Users u JOIN dbo.Users u2 ON u2.UserID = u.DirectManager JOIN dbo.SalesLines sl ON u.SalesLineID = sl.SalesLineID
	LEFT JOIN (SELECT UserID, (SELECT dbo.fncUserIMS(UserID)) IMS FROM dbo.Users ) ims ON u.UserID = ims.UserID
	WHERE u.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID=@UserID) AND u.UserID != @UserID AND u.Disabled <> 1
END
ELSE
BEGIN
	SELECT u.*, u2.UserName AS DirectManagerName, sl.LineName, ims.IMS  FROM (
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
	) u JOIN dbo.Users u2 ON u2.UserID = u.DirectManager JOIN dbo.SalesLines sl ON u.SalesLineID = sl.SalesLineID
	LEFT JOIN (SELECT UserID, (SELECT dbo.fncUserIMS(UserID)) IMS FROM dbo.Users ) ims ON u.UserID = ims.UserID
	WHERE u.Disabled <> 1
END	
GO
CREATE Function fncUserChain ( @UserID INT )
RETURNS @tbl TABLE (UserID  INT, UserName NVARCHAR(500), LoginName NVARCHAR(200), UserPass NVARCHAR(200), JobClass NVARCHAR(200),
	RequestDate DATE, DirectManager INT, Approved BIT, ApproveUser INT, Email NVARCHAR(200), Phone NVARCHAR(50), SalesLineID INT,
	[Disabled] BIT, DirectManagerName NVARCHAR(500), LineName NVARCHAR(200), IMS NVARCHAR(max))
AS
BEGIN
	DECLARE @Class NVARCHAR(50) = (SELECT JobClass FROM dbo.Users WHERE UserID=@UserID)
	IF(@Class = 'SysAdmin')
	BEGIN
		INSERT @tbl ( UserID ,UserName ,LoginName ,UserPass ,JobClass ,RequestDate ,DirectManager ,Approved ,
		          ApproveUser ,Email ,Phone ,SalesLineID ,Disabled ,DirectManagerName ,LineName ,IMS )
		SELECT  u.*, u2.UserName AS DirectManagerName, sl.LineName, ims.IMS 
		FROM dbo.Users u JOIN dbo.Users u2 ON u2.UserID = u.DirectManager JOIN dbo.SalesLines sl ON u.SalesLineID = sl.SalesLineID
		LEFT JOIN (SELECT UserID, (SELECT dbo.fncUserIMS(UserID)) IMS FROM dbo.Users ) ims ON u.UserID = ims.UserID
		WHERE u.UserID != @UserID AND u.Disabled <> 1
	END
	ELSE IF(@Class = 'Managers View')
	BEGIN
		INSERT @tbl ( UserID ,UserName ,LoginName ,UserPass ,JobClass ,RequestDate ,DirectManager ,Approved ,
		          ApproveUser ,Email ,Phone ,SalesLineID ,Disabled ,DirectManagerName ,LineName ,IMS )
		SELECT  u.*, u2.UserName AS DirectManagerName, sl.LineName, ims.IMS 
		FROM dbo.Users u JOIN dbo.Users u2 ON u2.UserID = u.DirectManager JOIN dbo.SalesLines sl ON u.SalesLineID = sl.SalesLineID
		LEFT JOIN (SELECT UserID, (SELECT dbo.fncUserIMS(UserID)) IMS FROM dbo.Users ) ims ON u.UserID = ims.UserID
		WHERE u.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID=@UserID) AND u.UserID != @UserID AND u.Disabled <> 1
	END
	ELSE
	BEGIN
		INSERT @tbl ( UserID ,UserName ,LoginName ,UserPass ,JobClass ,RequestDate ,DirectManager ,Approved ,
		          ApproveUser ,Email ,Phone ,SalesLineID ,Disabled ,DirectManagerName ,LineName ,IMS )
		SELECT u.*, u2.UserName AS DirectManagerName, sl.LineName, ims.IMS  FROM (
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
		) u JOIN dbo.Users u2 ON u2.UserID = u.DirectManager JOIN dbo.SalesLines sl ON u.SalesLineID = sl.SalesLineID
		LEFT JOIN (SELECT UserID, (SELECT dbo.fncUserIMS(UserID)) IMS FROM dbo.Users ) ims ON u.UserID = ims.UserID
		WHERE u.Disabled <> 1
	END	
	RETURN
END 
GO
CREATE PROC UserManagers @UserID INT AS 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users Where UserID = @UserID)
UNION 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID = @UserID))
UNION 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID = @UserID)))
UNION 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID = @UserID))))
GO
CREATE FUNCTION fncUserManagers (@UserID INT)
RETURNS TABLE 
RETURN 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users Where UserID = @UserID)
UNION 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID = @UserID))
UNION 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID = @UserID)))
UNION 
SELECT * FROM dbo.Users WHERE UserID IN	(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users WHERE UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID IN 
												(SELECT DirectManager FROM dbo.Users Where UserID = @UserID))))
GO

CREATE PROC DestinationInsert
@Destination nvarchar(500),@DestType nvarchar(100), @Address nvarchar(max),@RegionID int,
@MedSpecID INT,@VisitImpID INT, @CreateUser INT, @IMSID	INT
AS
INSERT dbo.Destinations
        ( Destination ,DestType ,Address ,RegionID ,MedSpecID ,VisitImpID, CreateUser, IMSID )
VALUES  ( @Destination ,@DestType ,@Address ,@RegionID ,@MedSpecID ,@VisitImpID, @CreateUser, @IMSID )
SELECT IDENT_CURRENT('Destinations') AS DestID 
GO

CREATE PROC DestinationUpdate
@DestID INT,@Destination nvarchar(500),@DestType nvarchar(100), @Address nvarchar(max),@RegionID int,@MedSpecID INT,@VisitImpID INT
, @CreateUser int, @IMSID	INT
AS
UPDATE dbo.Destinations SET Destination=@Destination, DestType=@DestType, Address=@Address, RegionID=@RegionID,
	MedSpecID=@MedSpecID,VisitImpID=@VisitImpID , CreateUser=@CreateUser, IMSID=@IMSID
WHERE DestID=@DestID
GO

CREATE PROC DestinationDelete
@DestID INT AS
DELETE dbo.UserDestinations WHERE DestID=@DestID
DELETE dbo.Destinations WHERE DestID=@DestID
GO

CREATE PROC DestinationApprove
@DestID INT, @ApproveUser INT AS
Update dbo.Destinations SET Approved=1, ApproveUser=@ApproveUser WHERE DestID=@DestID
GO

CREATE VIEW vwMonthPlan
AS
SELECT  p.PlanID ,
        PlanName ,
        FromDate ,
        ToDate ,
        p.SalesLineID ,
		sl.LineName ,
        s.SpecID ,
        SpecName ,
        d.DrugID ,
        DrugName ,
        i.ImpID ,
        ImpName ,
        VisitsNo 
FROM dbo.MonthPlan p 
JOIN dbo.SalesLines sl ON p.SalesLineID = sl.SalesLineID
JOIN dbo.PlanSpecs s ON p.PlanID = s.PlanID
JOIN dbo.MediSpecification ms on s.SpecID = ms.SpecID
JOIN dbo.PlanDrugs d ON p.PlanID = d.PlanID
JOIN dbo.Drugs md ON d.DrugID = md.DrugID
JOIN dbo.PlanImp i ON p.PlanID = i.PlanID
JOIN dbo.VisitImportance mi ON i.ImpID = mi.ImpID
GO
CREATE VIEW vwDestinations
AS
SELECT  d.DestID ,d.Destination ,d.DestType ,d.Address ,d.RegionID ,d.MedSpecID ,d.VisitImpID ,d.CreateUser ,
		d.ApproveUser ,d.Approved ,d.IMSID, r.RegionName, r.ProvinceID, m.SpecName, v.ImpName, v.VisitsNo ,
		ims.IMS, RegionName + ' - ' + ProvinceID AS RegionProvince
		,CAST(ISNULL(Exist, 0)AS BIT) PlanExist, CAST(ISNULL(ud.DestID, 0)AS BIT) AS Assigned 
FROM dbo.Destinations d 
LEFT JOIN dbo.VisitImportance v ON	d.VisitImpID = v.ImpID
LEFT JOIN dbo.MediSpecification m ON d.MedSpecID = m.SpecID
LEFT JOIN dbo.Regions r ON d.RegionID = r.RegionID 
LEFT JOIN dbo.IMSData ims ON	d.IMSID = ims.IMSID
LEFT JOIN (SELECT DISTINCT SpecID, ImpID, 1 Exist FROM dbo.vwMonthPlan WHERE CAST(GETDATE() AS Date) BETWEEN FromDate AND ToDate) mp
ON v.ImpID = mp.ImpID AND m.SpecID = mp.SpecID  
LEFT JOIN (SELECT DISTINCT DestID FROM dbo.UserDestinations) ud ON d.DestID = ud.DestID
GO

CREATE PROC VisitInsert
@VisitDate DATE ,@VisitTime TIME, @DestID INT, @UserID INT, @GeneralComment NVARCHAR(max),@VisitType NVARCHAR(200),@AccompanyID INT AS
INSERT dbo.Visits ( VisitDate ,VisitTime ,DestID ,UserID ,GeneralComment ,VisitType ,AccompanyID )
VALUES  ( @VisitDate, CAST(GETDATE() AS TIME), @DestID, @UserID ,@GeneralComment ,@VisitType ,@AccompanyID )
SELECT @@IDENTITY AS VisitID
GO

CREATE PROC VisitsUpdate
@VisitID INT, @VisitDate DATE ,@VisitTime TIME, @DestID INT, @UserID INT, @GeneralComment NVARCHAR(max),@VisitType NVARCHAR(200),@AccompanyID INT AS 
UPDATE dbo.Visits SET VisitDate=@VisitDate, VisitTime=@VisitTime, DestID=@DestID, UserID = @UserID , VisitType =@VisitType, GeneralComment =@GeneralComment,
					  AccompanyID=@AccompanyID WHERE VisitID=@VisitID
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
@VisitID INT, @ToolID INT, @Quant INT AS
INSERT dbo.VisitGifts ( VisitID, ToolID, Qty )
VALUES  ( @VisitID, @ToolID, @Quant)
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
LEFT JOIN (SELECT DestID, FORMAT(VisitDate, 'MM-yyyy') VisitDate, COUNT(VisitID) visCount FROM dbo.Visits v1
		LEFT JOIN dbo.Users u1 ON v1.UserID = u1.UserID AND u1.JobClass != 'District Manager' GROUP BY DestID, FORMAT(VisitDate, 'MM-yyyy')
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

CREATE VIEW vwPromoTools
AS
SELECT  p.ToolID ,p.ToolName ,p.GiftID ,p.DrugID, g.GiftName, d.DrugName 
FROM dbo.PromoTools p JOIN	dbo.Gifts g ON p.GiftID = g.GiftID LEFT JOIN dbo.Drugs d ON p.DrugID = d.DrugID
GO

CREATE PROC PromoToolInsert
@ToolName NVARCHAR(500), @GiftID INT, @DrugID INT AS
INSERT dbo.PromoTools ( ToolName, GiftID, DrugID )
VALUES  ( @ToolName, @GiftID, @DrugID)
GO

CREATE PROC PromoToolUpdate
@ToolID INT, @ToolName NVARCHAR(500), @GiftID INT, @DrugID INT AS
UPDATE dbo.PromoTools SET ToolName=@ToolName, GiftID=@GiftID, DrugID =@DrugID WHERE ToolID = @ToolID
GO

CREATE PROC PromoToolDelete
@ToolID INT AS
DELETE dbo.PromoTools WHERE ToolID = @ToolID
GO


--SELECT  l.RepName ,l.CustomerName ,l.Address ,l.Region ,l.Province ,r.RegionID ,
--        l.Class ,m.ImpID ,l.Speciality , s.SpecID
--FROM dbo.stgDrList l 
--LEFT JOIN dbo.Regions r ON l.Region = r.RegionName AND l.Province = r.ProvinceID
--LEFT JOIN dbo.MediSpecification s ON l.Speciality = s.SpecName
--LEFT JOIN dbo.VisitImportance m ON l.Class = m.ImpName

--INSERT dbo.Destinations  ( Destination ,DestType ,Address ,RegionID ,MedSpecID ,VisitImpID ,CreateUser ,ApproveUser ,Approved ,IMSID )
--SELECT  l.CustomerName, 'Clinic (Doctor)' ,l.Address ,r.RegionID , s.SpecID, m.ImpID, 1, 1, 1, ims.IMSID
--FROM dbo.stgDrList l 
--LEFT JOIN dbo.Regions r ON l.Region = r.RegionName AND l.Province = r.ProvinceID
--LEFT JOIN dbo.IMSData ims ON r.IMSID = ims.IMSID
--LEFT JOIN dbo.MediSpecification s ON l.Speciality = s.SpecName
--LEFT JOIN dbo.VisitImportance m ON l.Class = m.ImpName 
--WHERE RepName = 'Noha Ahmed'

--INSERT dbo.UserDestinations  ( UserID, DestID )
--SELECT 7125, DestID FROM dbo.Destinations d JOIN dbo.stgDrList l ON d.Destination=l.CustomerName 
--JOIN dbo.Regions r ON l.Region = r.RegionName AND l.Province = r.ProvinceID AND d.RegionID=r.RegionID WHERE RepName = 'Noha Ahmed' 

CREATE PROC dbo.MonthPlanInsert
@PlanName NVARCHAR(200),@FromDate DATE,@ToDate DATE,@SalesLineID INT AS
INSERT dbo.MonthPlan
        ( PlanName ,FromDate ,ToDate ,SalesLineID )
VALUES  ( @PlanName ,@FromDate ,@ToDate ,@SalesLineID )
SELECT @@IDENTITY AS PlanID
GO
CREATE PROC dbo.MonthPlanUpdate
@PlanID INT,@PlanName NVARCHAR(200),@FromDate DATE,@ToDate DATE,@SalesLineID INT AS
UPDATE dbo.MonthPlan SET PlanName=@PlanName ,FromDate=@FromDate ,ToDate=@ToDate ,SalesLineID=@SalesLineID
WHERE PlanID=@PlanID
GO
CREATE PROC dbo.MonthPlanDelete
@PlanID INT AS
DELETE dbo.PlanDrugs WHERE PlanID=@PlanID
DELETE dbo.PlanImp WHERE PlanID=@PlanID
DELETE dbo.PlanSpecs WHERE PlanID=@PlanID
DELETE dbo.MonthPlan WHERE PlanID=@PlanID
GO

CREATE PROC dbo.PlanSpecsInsert
@PlanID INT, @SpecID INT AS
INSERT dbo.PlanSpecs ( PlanID, SpecID )
VALUES  ( @PlanID, @SpecID )
GO
CREATE PROC dbo.PlanSpecsDelete
@PlanID INT AS
DELETE dbo.PlanSpecs WHERE PlanID = @PlanID
GO
CREATE PROC dbo.PlanImportanceInsert
@PlanID INT, @ImpID INT AS
INSERT dbo.PlanImp ( PlanID, ImpID )
VALUES  ( @PlanID, @ImpID )
GO
CREATE PROC PlanImportanceDelete
@PlanID INT AS
DELETE dbo.PlanImp WHERE PlanID = @PlanID
GO
CREATE PROC PlanDrugsInsert
@PlanID INT, @DrugID INT AS
INSERT dbo.PlanDrugs ( PlanID, DrugID )
VALUES  ( @PlanID, @DrugID )
GO
CREATE PROC PlanDrugsDelete
@PlanID INT AS
DELETE dbo.PlanDrugs WHERE PlanID = @PlanID
GO

CREATE PROC procGetUserPlanDestinations (@UserID INT) AS
SELECT ps.SpecID, im.ImpID, d.DestID, d.Destination, d.DestType, d.Address, d.RegionID 
FROM dbo.MonthPlan p 
JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
JOIN dbo.Destinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID
AND DestID IN (SELECT DestID From dbo.UserDestinations WHERE UserID = @UserID)
WHERE CAST(GETDATE() AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
GO
CREATE PROC procGetUserPlanDrugs (@UserID INT) AS
SELECT  d.DrugID ,d.DrugName ,d.Description ,d.SalesLineID, s.LineName  
FROM dbo.MonthPlan p JOIN dbo.PlanDrugs pd ON pd.PlanID = p.PlanID JOIN dbo.Drugs d ON pd.DrugID = d.DrugID
JOIN dbo.SalesLines s ON d.SalesLineID = s.SalesLineID
WHERE CAST(GETDATE() AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
GO
CREATE PROC procGetUserPlanRegionDestinations (@UserID INT, @RegionID INT, @VisitDate NVARCHAR(12)) AS
SELECT ps.SpecID, im.ImpID, d.DestID, d.Destination, d.DestType, d.Address, d.RegionID 
FROM dbo.MonthPlan p 
JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
JOIN dbo.Destinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID 
AND RegionID = @RegionID And Approved = 1
JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID AND ud.UserID IN ( SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID) )
WHERE CAST(@VisitDate AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
GO
CREATE Proc procVisitSchedule(@UserID INT, @VisitDate NVARCHAR(12))
AS
SELECT d.DestID , Destination , DestType , Address , RegionID ,
        MedSpecID , VisitImpID , CreateUser , ApproveUser ,
        Approved , RegionName , ProvinceID , SpecName , ImpName ,
        VisitsNo , ISNULL(VisitDate, '') VisitDate, ISNULL(visCount, 0) visCount,
		VisitsNo - ISNULL(visCount, 0) AS RemVisits,
		1 - CAST((CASE WHEN CAST(ISNULL(visCount, 0) AS DECIMAL(5,2))  /  VisitsNo > 1 
					THEN 1 
					ELSE CAST(ISNULL(visCount, 0) AS DECIMAL(5,2))  /  VisitsNo 
				  END)AS DECIMAL(5,2)) AS visLossPercent ,
		ISNULL((SELECT COUNT(VisitID)
		FROM dbo.Visits WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(CAST(@VisitDate AS DATE), 'MM-yyyy') 
		AND UserID = (SELECT UserID FROM dbo.fncUserManagers(@UserID) WHERE JobClass = 'District Manager')
		AND DestID = d.DestID GROUP BY DestID, FORMAT(VisitDate, 'MM-yyyy') ), 0)  DistManVisits
FROM dbo.MonthPlan p 
JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
JOIN dbo.vwDestinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID AND Approved = 1
AND d.DestID IN (SELECT DestID From dbo.UserDestinations WHERE UserID IN ( SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID) ))
LEFT JOIN (SELECT DestID, FORMAT(VisitDate, 'MM-yyyy') VisitDate, COUNT(VisitID) visCount 
		FROM dbo.Visits WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(CAST(@VisitDate AS DATE), 'MM-yyyy') AND UserID = @UserID
		GROUP BY DestID, FORMAT(VisitDate, 'MM-yyyy')
	  ) v ON d.DestID = v.DestID
WHERE 
CAST(@VisitDate AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
GO
CREATE PROC ProcChechMaxVisits(@UserID INT, @DestID INT, @VisitDate NVARCHAR(12))
AS
SELECT CAST((VisitsNo - ISNULL(visCount, 0)) AS BIT) Allowed, VisitsNo, visCount
FROM dbo.MonthPlan p 
JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
JOIN dbo.vwDestinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID AND Approved = 1
AND d.DestID = @DestID
LEFT JOIN (SELECT DestID, FORMAT(VisitDate, 'MM-yyyy') VisitDate, COUNT(VisitID) visCount 
		FROM dbo.Visits WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(CAST(@VisitDate AS DATE), 'MM-yyyy') AND UserID = @UserID
		GROUP BY DestID, FORMAT(VisitDate, 'MM-yyyy')
	  ) v ON d.DestID = v.DestID
WHERE 
CAST(@VisitDate AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
GO
CREATE FUNCTION fncVisitComparisonReport(@UserID INT, @VisitDate NVARCHAR(12))
RETURNS TABLE
RETURN
SELECT VisType, VisCount FROM (
SELECT ISNULL(SUM(VisitsNo), 0) Planned, ISNULL(SUM(visCount), 0) [Committed]
FROM dbo.MonthPlan p 
JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
JOIN dbo.vwDestinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID AND Approved = 1
AND d.DestID IN (SELECT DestID From dbo.UserDestinations WHERE UserID = @UserID)
LEFT JOIN (SELECT v.DestID, ISNULL(COUNT(v.VisitID), 0) AS visCount 
			FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
			WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(CAST(@VisitDate AS Date), 'MM-yyyy') And v.UserID = @UserID GROUP BY v.DestID
		) v ON d.DestID = v.DestID
WHERE 
CAST(@VisitDate AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
) SRC
UNPIVOT (VisCount FOR VisType IN (Committed, Planned)) pvt
GO

CREATE PROC procGetDestinationUsers (@DestID INT) AS 
SELECT s.SalesLineID, LineName, u.UserID, u.UserName, CAST(DestID AS BIT) selected FROM dbo.Users u
JOIN dbo.SalesLines s ON u.SalesLineID = s.SalesLineID AND u.JobClass = 'Medical Rep.'
LEFT JOIN dbo.UserDestinations ud ON u.UserID = ud.UserID AND DestID = @DestID
GO
CREATE PROC IMSInsert (@IMS NVARCHAR(150)) AS 
INSERT dbo.IMSData ( IMS ) VALUES  ( @IMS )
GO
CREATE PROC IMSUpdate (@IMSID INT, @IMS NVARCHAR(150)) AS 
UPDATE dbo.IMSData SET IMS=@IMS WHERE IMSID=@IMSID
GO
CREATE PROC IMSDelete (@IMSID INT) AS 
DELETE dbo.IMSData WHERE IMSID=@IMSID
GO

CREATE PROC RotateUserDestination(@UserID1 INT , @UserID2 INT)
AS
INSERT dbo.stgUserDestinations ( UserID, DestID )
SELECT * FROM dbo.UserDestinations WHERE UserID = @UserID2

DELETE FROM dbo.UserDestinations WHERE UserID = @UserID2

UPDATE dbo.UserDestinations SET UserID = @UserID2 WHERE UserID = @UserID1

INSERT dbo.UserDestinations ( UserID, DestID )
SELECT @UserID1, DestID FROM dbo.stgUserDestinations WHERE UserID = @UserID2

DELETE FROM dbo.stgUserDestinations
GO
CREATE FUNCTION fncMonthChainVisitCount( @UserID INT )
RETURNS TABLE 
RETURN
SELECT ISNULL(COUNT(v.VisitID), 0) AS visCount
FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(GETDATE(), 'MM-yyyy') 
And v.UserID IN ( SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID) ) 
GO
CREATE FUNCTION fncTodayChainVisitCount( @UserID INT )
RETURNS TABLE 
RETURN
SELECT ISNULL(COUNT(v.VisitID), 0) AS visCount
FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
WHERE VisitDate = GETDATE()
And v.UserID IN ( SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID) ) 
GO
CREATE FUNCTION fncMonthChainPlannedVisits( @UserID INT )
RETURNS TABLE
RETURN 
SELECT SUM(VisitsNo) visCount
FROM dbo.MonthPlan p 
JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
JOIN dbo.vwDestinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID AND Approved = 1
AND d.DestID IN (SELECT DestID From dbo.UserDestinations WHERE UserID IN ( SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID) ) )
WHERE 
CAST(GETDATE() AS Date) BETWEEN FromDate AND ToDate
AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID)
GO
CREATE FUNCTION fncMonthChainPromoCount( @UserID INT )
RETURNS TABLE 
RETURN
SELECT SUM(Qty) promoCount FROM dbo.Visits v JOIN dbo.VisitGifts vg ON v.VisitID = vg.VisitID
WHERE FORMAT(VisitDate, 'MM-yyyy') = FORMAT(CAST(GETDATE() AS DATE), 'MM-yyyy') 
And v.UserID IN ( SELECT @UserID UNION SELECT UserID FROM dbo.fncUserChain(@UserID) ) 
GO

CREATE FUNCTION fncDrugAnalysis(@FromDate NVARCHAR(15), @ToDate NVARCHAR(15), @DrugID INT)
RETURNS TABLE
RETURN
SELECT v.UserID, u.UserName, v.VisitID, CAST(v.VisitDate AS DATE) VisitDate, vd.DrugID, d.DestID, d.Destination, d.DestType, d.Address, d.IMSID, d.IMS, 
		d.ImpName, d.MedSpecID, d.SpecName, d.RegionProvince, vd.Comment
FROM dbo.Visits v 
JOIN dbo.VisitDrugs vd ON v.VisitID = vd.VisitID
JOIN dbo.vwDestinations d ON v.DestID = d.DestID 
JOIN dbo.Users u ON v.UserID = u.UserID
WHERE CAST(v.VisitDate AS DATE) BETWEEN CAST(@FromDate AS DATE) AND CAST(@ToDate AS DATE) AND vd.DrugID = @DrugID
GO
CREATE FUNCTION fncDrugPromoAnalysis(@FromDate NVARCHAR(15), @ToDate NVARCHAR(15), @DrugID INT)
RETURNS TABLE
RETURN
SELECT v.UserID, u.UserName, CAST(v.VisitDate AS DATE) VisitDate, vd.DrugID, d.Destination, d.DestType, d.IMS, 
		d.ImpName, d.MedSpecID, d.SpecName, g.GiftID, g.GiftName, p.ToolID, ToolName, Qty
FROM dbo.Visits v JOIN dbo.VisitGifts vg ON v.VisitID = vg.VisitID 
JOIN dbo.VisitDrugs vd ON v.VisitID = vd.VisitID
JOIN dbo.PromoTools p ON vg.ToolID = p.ToolID AND p.DrugID = vd.DrugID JOIN dbo.Gifts g ON p.GiftID = g.GiftID
JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID 
WHERE CAST(v.VisitDate AS DATE) BETWEEN CAST(@FromDate AS DATE) AND CAST(@ToDate AS DATE) AND vd.DrugID = @DrugID
GO

CREATE VIEW vwVacation
AS
SELECT  v.VacID, v.FromDate, v.ToDate, v.UserID, u.UserName, u.JobClass, v.VacType, v.Notes,
(SELECT  dbo.fncUserIMS(v.UserID)) AS IMS
FROM dbo.UserVacations v JOIN dbo.Users u ON v.UserID = u.UserID
GO

CREATE PROC VacationInsert
@FromDate DATE, @ToDate DATE, @UserID INT, @VacType NVARCHAR(50), @Notes NVARCHAR(max)
AS
INSERT dbo.UserVacations
        ( FromDate ,ToDate ,UserID ,VacType ,Notes )
VALUES  ( @FromDate ,@ToDate ,@UserID ,@VacType ,@Notes )
GO

CREATE PROC VacationUpdate
@VacID INT, @FromDate DATE, @ToDate DATE, @UserID INT, @VacType NVARCHAR(50), @Notes NVARCHAR(max)
AS
UPDATE dbo.UserVacations SET FromDate=@FromDate ,ToDate=@ToDate ,UserID=@UserID ,VacType=@VacType ,Notes=@Notes
WHERE VacID=@VacID
GO

CREATE PROC VacationDelete
@VacID INT AS
DELETE dbo.UserVacations WHERE VacID=@VacID
GO

CREATE PROC ContactUsInsert
@UserID INT, @IssueType NVARCHAR(50), @Title NVARCHAR(300), @IDescription NVARCHAR(max) 
AS
INSERT dbo.ContactUs
        ( UserID ,CreateDate ,IssueType ,Title ,IDescription ,Solved ,SolveDate )
VALUES  ( @UserID , GETDATE() ,@IssueType ,@Title ,@IDescription ,0 , NULL )
GO

CREATE PROC ContactUsUpdate
@ID INT, @UserID INT, @IssueType NVARCHAR(50), @Title NVARCHAR(300), @IDescription NVARCHAR(max) AS
UPDATE dbo.ContactUs SET IssueType=@IssueType ,Title=@Title ,IDescription=@IDescription
WHERE ID=@ID AND UserID=@UserID 
GO

CREATE PROC ContactUsDelete
@ID INT AS
DELETE dbo.ContactUs WHERE ID=@ID 	 
GO

CREATE PROC ContactUsSolve
@ID INT AS
UPDATE dbo.ContactUs SET Solved=1, SolveDate=CAST(GETDATE() AS DATE)  WHERE ID=@ID
GO

--SELECT * FROM dbo.fncVisitComparisonReport(1, '2017-01-01')

--DECLARE  @From DATE = '2017-04-01', @To DATE = '2017-06-30', @IMSID INT = 23, @SpecID INT = 2

--SELECT ToolName, COUNT(g.ToolID) FROM dbo.VisitGifts g JOIN dbo.Visits v ON v.VisitID = g.VisitID
--JOIN dbo.Destinations d ON d.DestID = v.DestID
--JOIN dbo.PromoTools t ON g.ToolID = t.ToolID 
----JOIN dbo.IMSData i ON d.IMSID = i.IMSID
--WHERE CAST(v.VisitDate AS DATE) BETWEEN @From AND @To 
----AND d.IMSID = @IMSID
--GROUP BY g.ToolID, ToolName

--SELECT s.SpecName, d.IMSID, IMS ,COUNT(VisitID) FROM dbo.Visits v JOIN dbo.Destinations d ON v.DestID = d.DestID 
--JOIN dbo.MediSpecification s ON d.MedSpecID = s.SpecID 

--JOIN dbo.IMSData ims ON d.IMSID = ims.IMSID
--WHERE CAST(v.VisitDate AS DATE) BETWEEN '2017-02-01' AND '2017-04-30'
----AND s.SpecID = @SpecID AND IMSID = @IMSID 
--GROUP BY SpecName, d.IMSID, IMS

--SELECT i.IMS ,COUNT(VisitID) FROM dbo.Visits v 
--JOIN dbo.Destinations d ON v.DestID = d.DestID JOIN dbo.IMSData i ON d.IMSID = i.IMSID
--WHERE CAST(v.VisitDate AS DATE) BETWEEN @From AND @To AND d.IMSID = @IMSID
--GROUP BY IMS

--;with  DayRecursive as (
--select @From as DayDate ,1 as [level]
--union all
--select DATEADD(DAY,level, @From),[level]+1 from  DayRecursive where DATEADD(DAY,level, @From)<=@To)
--SELECT DayDate, ISNULL(qry.visCount , 0) visCount
--from DayRecursive d
--LEFT JOIN (SELECT s.SpecName, VisitDate ,COUNT(VisitID) visCount FROM dbo.Visits v JOIN dbo.Destinations d ON v.DestID = d.DestID
--JOIN dbo.MediSpecification s ON d.MedSpecID = s.SpecID WHERE CAST(v.VisitDate AS DATE) BETWEEN @From AND @To
--AND s.SpecID = @SpecID /* AND IMSID = @IMSID */ GROUP BY SpecName, VisitDate) qry ON d.DayDate = qry.VisitDate

--SELECT * FROM dbo.Users 
--SELECT * ROM dbo.UserLogHistory WHERE CAST(LogDate AS DATE) = CAST(GETDATE() /*DATEADD(DAY, -1, )*/ AS DATE)
--SELECT * FROM dbo.Visits WHERE CAST(VisitDate AS DATE) = CAST(GETDATE() /*DATEADD(DAY, -1, ))*/ AS DATE)

----Comments in Period
--SELECT v.UserID, u.UserName, CAST(v.VisitDate AS DATE) VisitDate, vd.VisitID, vd.DrugID, vd.Comment ,d.DestID, d.Destination, d.DestType, d.Address, d.IMS, 
--		d.ImpName, d.SpecName, d.RegionProvince
--FROM dbo.Visits v JOIN dbo.VisitDrugs vd ON v.VisitID = vd.VisitID
--JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
--WHERE VisitDate BETWEEN '2017-01-01' AND '2017-12-31' AND DrugID = 2042 AND Comment IS NOT NULL

----IMS in Period
--SELECT v.UserID, u.UserName, CAST(v.VisitDate AS DATE) VisitDate, vd.VisitID, vd.DrugID, d.Destination, d.DestType, d.IMS, 
--		d.ImpName, d.SpecName, d.RegionProvince
--FROM dbo.Visits v 
--JOIN dbo.VisitDrugs vd ON v.VisitID = vd.VisitID
--JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID 
--WHERE VisitDate BETWEEN '2017-01-01' AND '2017-12-31' AND vd.DrugID = 2042 -- AND IMSID = 40

----drug Promos In Period
--SELECT v.UserID, u.UserName, CAST(v.VisitDate AS DATE) VisitDate, vd.DrugID, d.Destination, d.DestType, d.IMS, 
--		d.ImpName, d.SpecName, g.GiftID, g.GiftName, p.ToolID, ToolName, Qty
--FROM dbo.Visits v JOIN dbo.VisitGifts vg ON v.VisitID = vg.VisitID 
--JOIN dbo.VisitDrugs vd ON v.VisitID = vd.VisitID
--JOIN dbo.PromoTools p ON vg.ToolID = p.ToolID AND p.DrugID = vd.DrugID JOIN dbo.Gifts g ON p.GiftID = g.GiftID
--JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID 
--WHERE VisitDate BETWEEN '2017-01-01' AND '2017-12-31' AND vd.DrugID = 2042 

----Drug Destination in Period 
--SELECT v.UserID, u.UserName, CAST(v.VisitDate AS DATE) VisitDate, vd.VisitID, vd.DrugID, d.DestID, d.Destination, d.DestType, d.IMS, 
--		d.ImpName, d.SpecName, d.RegionProvince
--FROM dbo.Visits v 
--JOIN dbo.VisitDrugs vd ON v.VisitID = vd.VisitID
--JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID 
--WHERE VisitDate BETWEEN '2017-01-01' AND '2017-12-31' AND vd.DrugID = 2042 AND d.DestID = 2062

CREATE TRIGGER trgDestinationInsert ON dbo.Destinations 
AFTER INSERT
AS 
INSERT dbo.EventLog  ( EventDate ,FormName ,ChangeType, ObjectID )
SELECT GETDATE() , N'Customers' , N'INSERT', DestID FROM INSERTED   
GO

CREATE TRIGGER trgDestinationUpdate ON dbo.Destinations
AFTER UPDATE
AS
INSERT dbo.EventLog  ( EventDate ,FormName ,ChangeType, ObjectID )
SELECT GETDATE() , N'Customers' , N'UPDATE', DestID FROM INSERTED   
GO

CREATE FUNCTION fncMedRepReport (@FromDate DATE, @ToDate DATE, @SalesLineID INT)
RETURNS @RetTbl TABLE (UserID INT, UserName NVARCHAR(500), JobClass NVARCHAR(50), Planned INT, CommittedVisits INT, ComVisitPrcnt FLOAT, Customers INT, Logins INT)
AS
BEGIN
	
DECLARE @UserID INT, @UserName NVARCHAR(500), @JobClass NVARCHAR(50)
DECLARE CurFF CURSOR FAST_FORWARD
FOR SELECT UserID, UserName, JobClass FROM dbo.Users u WHERE JobClass IN ('District Manager', 'Medical Rep.') 
AND SalesLineID = @SalesLineID AND u.Disabled <> 1 ORDER BY JobClass
OPEN CurFF
FETCH CurFF INTO  @UserID, @UserName, @JobClass
WHILE @@FETCH_STATUS = 0 
BEGIN
DECLARE @Planned INT = 
			(	SELECT ISNULL(SUM(VisitsNo), 0) visCount
				FROM dbo.MonthPlan p 
				JOIN dbo.PlanSpecs ps ON ps.PlanID = p.PlanID 
				JOIN dbo.PlanImp im ON p.PlanID = im.PlanID 
				JOIN dbo.vwDestinations d ON ps.SpecID = d.MedSpecID AND im.ImpID = d.VisitImpID AND Approved = 1
				AND d.DestID IN (SELECT DestID From dbo.UserDestinations WHERE UserID = @UserID) 
				WHERE CAST(@FromDate AS Date) BETWEEN FromDate AND ToDate
				AND CAST(@ToDate AS Date) BETWEEN FromDate AND ToDate
				AND p.SalesLineID = (SELECT SalesLineID FROM dbo.Users WHERE UserID = @UserID))
DECLARE @Committed INT = 
			(	SELECT ISNULL(COUNT(v.VisitID), 0) AS visCount
				FROM dbo.Visits v JOIN dbo.vwDestinations d ON v.DestID = d.DestID JOIN dbo.Users u ON v.UserID = u.UserID
				WHERE VisitDate BETWEEN @FromDate AND @ToDate And v.UserID = @UserID )
DECLARE @Customers INT = ( SELECT ISNULL(COUNT(DISTINCT d.DestID), 0) AS DestCount FROM dbo.vwDestinations d
                JOIN dbo.UserDestinations ud ON d.DestID = ud.DestID AND ud.UserID = @UserID )
DECLARE @Logins INT = ( SELECT ISNULL(COUNT(UserID), 0) FROM dbo.UserLogHistory WHERE LogDate BETWEEN @FromDate AND @ToDate AND UserID = @UserID)


	INSERT @RetTbl( UserID ,UserName ,JobClass ,Planned ,CommittedVisits ,ComVisitPrcnt ,Customers ,Logins )
	VALUES  ( @UserID ,@UserName , @JobClass ,@Planned ,@Committed ,
	          CASE WHEN @Planned > 0 THEN ROUND(CAST(@Committed AS FLOAT) / @Planned, 2) ELSE 0 END ,
	          @Customers ,@Logins )
FETCH CurFF INTO  @UserID, @UserName, @JobClass
END
DEALLOCATE CurFF
RETURN 
END
GO

CREATE PROC [dbo].[prcSalesLineVisitsReport] (@LineID INT, @FromDate DATE, @ToDate DATE)
AS
--DECLARE @strt DATE = DateFromParts(YEAR(GETDATE()), @Month, 1), @end DATE= DATEADD(DAY, -1, DATEADD(MONTH,1, DateFromParts(YEAR(GETDATE()), @Month, 1)))
;with  DayRecursive as (
select @FromDate as DayDate ,1 as [level]
union all
select DATEADD(DAY,level, @FromDate),[level]+1 from  DayRecursive where DATEADD(DAY,level, @FromDate)<=@ToDate)
SELECT DayDate, ISNULL(qry.visCount, 0) visCount
from DayRecursive d
LEFT JOIN (SELECT VisitDate, CONVERT(NVARCHAR(12), VisitDate, 103) cnvVisitDate, COUNT(VisitID) visCount 
FROM dbo.Visits v JOIN dbo.Users u ON v.UserID = u.UserID WHERE SalesLineID = @LineID GROUP BY VisitDate) qry ON d.DayDate = qry.VisitDate;
GO