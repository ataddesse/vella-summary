export default [
  `Delivered-To: meenadevesh2003@gmail.com
  Received: by 2002:a9d:6553:0:b0:6f0:616f:e7d7 with SMTP id q19csp501242otl;
          Wed, 22 May 2024 09:10:15 -0700 (PDT)
  X-Received: by 2002:a05:6870:d61f:b0:229:e6c6:1f13 with SMTP id 586e51a60fabf-24c68d6c3c4mr2765646fac.14.1716394215203;
          Wed, 22 May 2024 09:10:15 -0700 (PDT)
  ARC-Seal: i=1; a=rsa-sha256; t=1716394215; cv=none;
          d=google.com; s=arc-20160816;
          b=flXZ2SNkJK/ftgcquN/Zp1+Fu20wDQ9GBdZuSzZpCWfQ3Tly8sSoNdjI/yBU3O099i
           ycYrxkQ8YFQHqCJDNCDZpAZiP6tneRjlp8iHMiTk/RKHPfDybkYsesHr2sSWHxe2icjf
           Z6AAN1hv2X4pAMSB9g5Zqhvl7O19P+nL0eC/Yb9+aGRmY/M6P+AZFJ5YAx3d4MxlmzWo
           p051No6ofMdJcXwJk+71224lQQYzETyLIw+moGDl/CqA0g+jIdzLv+N1J9Q5LZP2L2Fl
           YzTkPh69mKTnasPkhQ062cbwRsFipuy909SttyjJM+zVENLLrkF/2CI0GjoSAT3E3s3M
           8Eyw==
  ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
          h=to:subject:message-id:date:from:in-reply-to:references:mime-version
           :dkim-signature;
          bh=Ev+e5zAt8Sc2VsO35/Fs6VQ+MDBM8zn/p/Jeaodv2Qo=;
          fh=LN2tmi9762Hw3zRD/kOw0OoGrww8nLvhm5EGObXDtpw=;
          b=PMbhpBn3p5gJgVX4LyN/gIyArpclD6iLp6TVkWUOJBua7gvToGf7I5BgQhJy98nCpq
           MedlYkEf+4NNfOiOIzwVhEOVjIb889fvbyOOO3vyKsINFBsTwNAMlNGEnCj35liP8WEz
           p/tpvp+urb5yRDjHfj961eXa+kwGQU5/XDbr1wAHiK4vI2lYa0JXHt2XOWZQYXcnhYPo
           CB9dTe8Hgxdn4ntiQ/n/KFjoKRdWoOmLXZP7dMVnL0mdMCAY/LHnW/xqNbdvCuf46tyK
           J1Q8i8o7f0C/c5HR9EdnprQUcwiZjxlINlxrP7TvvB5mdwN9sRvXWW19XIAAQb4XyXDS
           XlsA==;
          dara=google.com
  ARC-Authentication-Results: i=1; mx.google.com;
         dkim=pass header.i=@gmail.com header.s=20230601 header.b=T6IX2rta;
         spf=pass (google.com: domain of amanueltesfaye44@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amanueltesfaye44@gmail.com;
         dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com
  Return-Path: <amanueltesfaye44@gmail.com>
  Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])
          by mx.google.com with SMTPS id 586e51a60fabf-2412a3d35d2sor10726016fac.4.2024.05.22.09.10.15
          for <meenadevesh2003@gmail.com>
          (Google Transport Security);
          Wed, 22 May 2024 09:10:15 -0700 (PDT)
  Received-SPF: pass (google.com: domain of amanueltesfaye44@gmail.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41;
  Authentication-Results: mx.google.com;
         dkim=pass header.i=@gmail.com header.s=20230601 header.b=T6IX2rta;
         spf=pass (google.com: domain of amanueltesfaye44@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amanueltesfaye44@gmail.com;
         dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com
  DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
          d=gmail.com; s=20230601; t=1716394214; x=1716999014; dara=google.com;
          h=to:subject:message-id:date:from:in-reply-to:references:mime-version
           :from:to:cc:subject:date:message-id:reply-to;
          bh=Ev+e5zAt8Sc2VsO35/Fs6VQ+MDBM8zn/p/Jeaodv2Qo=;
          b=T6IX2rtapGMNV0BjOvSxw7oVZfaO73H/k6iTjqY4cq/mHwV5JgRpFquMvYPhHbsomY
           w7APKgxfB4TtCXpt9+YM18Bl+yOeS0rB8EbtMNDQxsKt4W5VTf0+oBnl3FXBSBvDvI+p
           0UKmECbG00J6kLuTa8umOS0IFKtdUyQl149hkNXo7Ob1r9z3lT29ACcgVsTJcx0GWTEl
           XkbbeqmfF9xUUvMcCfsjxFvvhCrNv21QLv7TIm0Gs86KsZQL6M+ooi7X1n5tvywX6riA
           Z7nHk3PfYsiA+bRt/CCmmqELIHtcrfHCMqQj4YwWp25mzkesYmM7/pV/NN/uysvXqOWB
           8oRg==
  X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
          d=1e100.net; s=20230601; t=1716394214; x=1716999014;
          h=to:subject:message-id:date:from:in-reply-to:references:mime-version
           :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;
          bh=Ev+e5zAt8Sc2VsO35/Fs6VQ+MDBM8zn/p/Jeaodv2Qo=;
          b=olA1B8fagw+AIZ2WwN6Gj96acQXxLqYa00IQiQqZj+hQ/3+FqFmMP0qtde87GkSWQw
           VWhJNj5tpYCRqS7nsf0qmMod+SeHIjYw7Rha2TDOf33ygSc6TRiZmV8FoHIOyCPRuotw
           kD9ZXX0qArFbhamwRXORf0L1PQYLF1+vZVBOi6FIqOT6tlXTQG4RMcIU6z4GD/pbzyAf
           NVYwO/NLH8C1lDxy/VwgwCVUhl0GEg5NxOuCYozqbzhRnpwOdiaFZrkvbbSj/sCtkO3c
           4QtAVNV6nRiT8WTmhLxC3bUd3NLXmBklCyNbvXnv+LX2MUNhLkdJ+v1ih6FQ+OeLxDbm
           TW7w==
  X-Gm-Message-State: AOJu0Yw1q0gGyYXRgP1HeUCLBXOeZqqCfDYvcMK+vVNtZTIWcurxO/d4 DvoKrRCOvoLUidBDg8guzumCNGaBEf4qSkC9Jo+V51DHeKnlDZT3ROOnNs6ZQk+eFhku01MZbyh 8CLYDimrnywnJOq4cy0WZFygyfk9j0E39jag=
  X-Google-Smtp-Source: AGHT+IEygij52tDqqsaDo6VXW57KT4jsMIO14K3tanMbyyn/1X4n8At84cOKRP7sd3uqHryb43kSpw8omxHHpwI+ijs=
  X-Received: by 2002:a05:6870:9409:b0:233:56e5:ff99 with SMTP id 586e51a60fabf-24c68d83066mr2714058fac.23.1716394213866; Wed, 22 May 2024 09:10:13 -0700 (PDT)
  MIME-Version: 1.0
  References: <aefc75cf-3ced-5995-9d77-debe75db11a7@mail.uber.com>
  In-Reply-To: <aefc75cf-3ced-5995-9d77-debe75db11a7@mail.uber.com>
  From: Amanuel Tesfaye <amanueltesfaye44@gmail.com>
  Date: Wed, 22 May 2024 11:10:02 -0500
  Message-ID: <CAOg8HWuA28Mq8R6+LqJjSr7=4bMJuZ10_GT1HM7NoVYwxJv5qw@mail.gmail.com>
  Subject: Fwd: Your Tuesday morning trip with Uber
  To: "meenadevesh2003@gmail.com" <meenadevesh2003@gmail.com>
  Content-Type: multipart/alternative; boundary="0000000000006984ed06190d2b71"

  --0000000000006984ed06190d2b71
  Content-Type: text/plain; charset="UTF-8"
  Content-Transfer-Encoding: quoted-printable

  ---------- Forwarded message ---------
  From: Uber Receipts <noreply@uber.com>
  Date: Tue, Jan 23, 2024 at 12:25=E2=80=AFPM
  Subject: Your Tuesday morning trip with Uber
  To: <amanueltesfaye44@gmail.com>





  Total $19.97
  January 23, 2024



  Thanks for riding, AMANUEL
  We hope you enjoyed your ride this morning.

  Total $19.97

  Trip fare $16.65

  Subtotal $16.65
  Wait Time
  <https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15UjLJqi79aYPwlG9e=
  bBhI-2BjzlDzoIe4eyE-2BGu7Ngh4JAV5Mj4mFsJc3CE7GOiXQye5ZEWBbH-2FUz1nJCwoijOMi=
  TcM0xHgvi1kjT5A65ukv4EKjkgvfsKsXf-2BjRbK-2FA1cQ6A-3D-3DSVyw_jO-2BLgV6xdFAPa=
  tgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRr=
  o38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkb=
  NepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2F=
  h9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR=
  23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7=
  p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVS=
  OOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp=
  -2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLNebANBlLDKngYaZ27cfb1SjjsMEp-2ByGile=
  WjhazTg-2FIRDKM2iGolJEVEobdBL8RKX-2BdVHXQDaTikYGGtQY5yqWyBPQsHGX7TcGS3BtKRl=
  kGIXxZze-2BB1j8yGh7rX80lqTbigQT-2Fd5Y1NJjpKda5wR14hiMbC-2F7NaK5BAoOkmw4jBks=
  jz661ODGh9fhudv3C0g-3D-3D>
  $0.34
  Booking Fee
  <https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15UjLJqi79aYPwlG9e=
  bBhI-2Bjy8q0fKaKOpyo4yLcf8H-2FTSpZYPamdl-2FmUc2Z3BsR6labjreZ4ZT4p-2FvMMMkMf=
  Hb-2BHMKu8xJJ04PW5X1mehPXLp0CfEBShYD68EYhreSmNs6b0VszOyL0xhfiSzR-2F-2Butq0-=
  3DNbHR_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxg=
  nKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJB=
  cvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd=
  -2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToK=
  wOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xC=
  Tj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDk=
  hX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwI=
  KFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLB7bTPVwxXOy0TT=
  7DPGXral4echn-2BgORE2NcU1Wb-2FmgXe4aOkpQKMxO6qGGMcrAuXFBxSTqqOLmBlybaZEgkOp=
  D6B91xFX5eDhdApU4DyRJo8QnHInJrEhS-2F1DcpypIG2SKvcEZNV-2FBHvWddJB4YDHwpEPb83=
  kyx9OCUToQzVqLXUaAJEVteNg-2FQ-2FjvzRvqQ-2Fg-3D-3D>
  $3.82
  Promotion -$1.04
  Texas Regulatory Recovery Fee $0.20

  Payments
  Visa =E2=80=A2=E2=80=A2=E2=80=A2=E2=80=A25006
  1/23/24 12:25 PM $19.97
  Switch Payment Method
  <https://email.uber.com/ls/click?upn=3D9O-2F0uOvVudG71uY6JZBiNBA2kJ1h0T8XTI=
  4yLNm5MdkRmeYD8zHAW7jbHbmeOzb5HiZ6J0i-2BudKalnQzkc5Zsw-3D-3Dsxwa_jO-2BLgV6x=
  dFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw=
  -2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2=
  FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-=
  2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiL=
  QhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35=
  b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9U=
  WRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93w=
  uyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLDddVU6Wt7-2FSxQdEdx9TnHMzs-2F9e=
  TSwSuaPVo9QC5vlxjM-2B-2Bh1v6rh4p1BHYoY9FXr4-2BDtPn0n8DwODraVe3OGwZ4NH7Jmf6d=
  NUhnSMqeht19rsIjmuZF2clL1RqmEOs79TnvHdA-2F65yhr14ap00Ah9Vgv37kdD6shah8q-2FX=
  jR0qa00l3WhTxjsJal3q7vUU4Q-3D-3D>
  Download PDF
  <https://email.uber.com/ls/click?upn=3DspA0-2FY-2B4siX2BcQou8-2F48-2FCuAvuo=
  JdGqwWnZ4u-2BoGRt2G3MHR2-2FvLzKBEg7w920-2BhXZ4Tsu-2BA-2B33WAQBSomrim0dlsobK=
  L39doLIyLJx6XYXUazZ1fmc7bYR0-2FRWDrR4u36iVZRXqqMKX76E4GjqBA-3D-3DILdZ_jO-2B=
  LgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6Odlkhc=
  G3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjv=
  rpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSy=
  w-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTA=
  AnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHd=
  iqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrV=
  UiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWh=
  hY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLAZHf5mDKvseDiosgL5HuOIyj1e=
  nv-2BqbeI-2FAYVBfKob9d5Jy82Gm2x4sesj-2Bjm32d-2BVJ4ELp6u6KIjOVWMCEL-2FnNJWNT=
  ZZeWGFx0mcsoP698ZSH7PzKMpQd-2F5lu1SmiWurMpVfnmhV74BJpQUwJoddk-2BPUVspyxan-2=
  FzLIuLku5IpwO2-2Fy7Yd5OE3xsEUpbJEHw-3D-3D>

  You rode with Cynthia
  4.92 Rating
  Has passed a multi-step safety screen
  Drivers are critical to communities right now. Say thanks with a tip.

  Rate or tip
  <https://email.uber.com/ls/click?upn=3DspA0-2FY-2B4siX2BcQou8-2F48-2FCuAvuo=
  JdGqwWnZ4u-2BoGRt2G3MHR2-2FvLzKBEg7w920-2BhXZ4Tsu-2BA-2B33WAQBSomrilAKNW9Li=
  yjNGV4o9KNm17o-3D8sGq_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BF=
  u4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2M=
  nDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbt=
  siX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPz=
  IonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhY=
  uCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djF=
  asNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXx=
  z-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtH=
  LBEaRTt4wdqdjTdAjzrn-2FfrCxs-2F-2BgaVCslRl-2FQI4YhA2dfFHJL2jU0legWdbTN4N-2F=
  yzJJ30EEEO9wQxuk9UaX1lNOFWMdOBgPlSpPw-2FiOYNumeP9caIPBgWQdGasHc0f7MKEDpz7JH=
  hcjGsyXX-2FgAbY3LnUs0JnY8BeAgbfDHJVrKgW-2Fw7SSTxcGS8ldyxdDqQ-3D-3D>
  When you ride with Uber, your trips are insured in case of a covered
  accident.
  Learn more =E2=9D=AF
  <https://email.uber.com/ls/click?upn=3DIb78WjkFQ66GYzavQJcfTQZ5KFOAdmdoxhGm=
  os3y6RyIXdn6JDq6NPTO5Z-2FwknEpM1Ib_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-=
  2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbg=
  olFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5Lm=
  CeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjl=
  UaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDu=
  F71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4D=
  PeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX=
  3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bm=
  l69mR0zYqOFtHLOgnfId83-2FtqURfAV5VF3UBMS4jBjZICi4YcxdIJp-2F1oXP1fBUHWBcyi4R=
  3kcS6KyYoKLKaQg3mpcHwslWqT8G9QOYhnENJ5QoJIgpoeXv0KhpC2qlXul8jH5gZ8esrc8WcYe=
  nAGHGKXz0DOPywOeZKP2u7YKMxtNfTu5fwD-2FhP7RNpTibFSGQGI03W2deqvow-3D-3D>


  UberX
  18.84 miles | 34 min
  1:33 AM
  3509 Grapevine Mills Pkwy, Grapevine, TX 76051, US
  2:08 AM
  5200 Gadsden Ave, Fort Worth, TX 76244, US

  Report lost item =E2=9D=AF
  <https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15Uvsoaok85PvqCQ3Q=
  lNb6arQAsUWbSTnikFU6vUxSTt8vgm7RDagOhr04y1Xv44afdKpcqaLlJ3iJEcDlphulsDM-3D0=
  VIk_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKT=
  fH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj=
  6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B=
  7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQ=
  rOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3=
  Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3=
  ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFK=
  ZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLDK-2Bdao6nml67HsK=
  zWfe-2F1sQqFr7Ex-2B7Aqew6hR8-2BonNcDC1rjA1nY2SqAJvhPjHtAK8nn1e4MdCp6S39Plf4=
  YTfRKCmLEMlHbKV7tQr3UJzEtvOoWJIxNRQ2oKW7xaprEd1LHb5WsEguRnb5qtUeG7kDEpaJQZb=
  LjGK4BmmJfbd4dYFardcYl4v8Fi-2FlNRpxw-3D-3D>


  Contact support=E2=9D=AF
  <https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15UjnU1u7fTMJxOJIS=
  1zPN1gI-3Dl50F_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A1=
  7qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVW=
  pwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZN=
  fV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F=
  3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPB=
  sGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkD=
  rbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcG=
  yaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLGLc2et=
  vb6OLJoeo6Z8W1LbzYKy17iPTGTCG1OV1cqes5rjyLIAfQn-2BcXT05ETnDNAJzEPRkiieoPjcM=
  h4qAA6QhlhwnrYG7BMaGvnr8bDo944Rk64uPX-2F7sfr84-2BfAmZyMv1AieLnlu9VqT2eVQknr=
  zt-2F8yohqF8VvGFgVs1BI7lY28aMVVEzkJKLepgIARUQ-3D-3D>
  Contact support =E2=9D=AF
  <https://email.uber.com/ls/click?upn=3DF0pXumfOS4MEaguoriMkMI4KWhkCtt-2Br91=
  wl3zOGbT5T7I5uVwV8wcbpBhIDvrgMYDKj_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-=
  2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbg=
  olFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5Lm=
  CeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjl=
  UaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDu=
  F71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4D=
  PeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX=
  3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bm=
  l69mR0zYqOFtHLESh7NkXKpCGATnmKl8XBPHJjRkUzha5tzP68GKRAsHHYb0UG3m-2BXPGq53AF=
  W2rQR-2B70b1ymmRMNGWGUQGYcWVGqXe8Oj3JKvw08CeSgFn4iUAyB9RzkOAuzwOQlzJ-2B1zCc=
  oTHZ3UDQGJP6p6q1ZTVVgHOKpzIhH6TqRlzSvQ-2BdRfprdHb4E6bPLOE22LBXGzA-3D-3D>

  My trips =E2=9D=AF
  <https://email.uber.com/ls/click?upn=3DspA0-2FY-2B4siX2BcQou8-2F48-2FCuAvuo=
  JdGqwWnZ4u-2BoGRshoZOO-2FR78Vytc-2FQoAWi931WPp_jO-2BLgV6xdFAPatgFHv7H3SUSL-=
  2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH=
  73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWF=
  tEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b=
  8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HY=
  MZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2Fb=
  XbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6L=
  L-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9=
  RSS2-2BA-2Bml69mR0zYqOFtHLJYBn-2Fi5nRTxMCy4QH8z9JrBXqRphyBm0mkF9CKMtJr6N0jP=
  XyPkZYLfiOqLHT1AuwpNluajwh8DevhOUoLsP0fjwd4zvUggQDFMZ6r02WtLT8xnqhbN32OYtQL=
  SI66ofHQLGGRkI3G9Cj1ihFx-2F4YOSWUwaKkNDi-2Bg0x2iXMKFIRDbIz555ud1-2FvKNbq9-2=
  B35g-3D-3D>



  Forgot password
  <https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15UiEU1Z05tLORYDhC=
  MvHDxMXp1-2FGrvQPqpo9EFNFs3mqmwnK9G-2F3FherPjzsICj7yM-2FK-2FJYue6uKR2EHeIe2=
  6RLwpFTiSq-2BB-2FMOIwXA4MEf4KzHSrwM9QQbMHeXFgqFXItep-2Bp1Kf9guqlEKa1wFayRA3=
  nSyhHdpw0M5nDUB4Sy-2FJsESM7ZfaBkdKepvt8RTcsw-3D-3DBlfv_jO-2BLgV6xdFAPatgFHv=
  7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8=
  QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7=
  GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQ=
  xzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK=
  1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2=
  Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltm=
  j-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoT=
  ZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLI93b-2FjlKp0K-2FPhsE7HwgKu5E1E1zRxE0aqfhy=
  3flGJly0HRgauoku2hhxM74PW7aWm5LMFJ9YtSXsSAFpeVx2RcHVf-2B6ap5kkYzzwt7iDL5xpS=
  UJEIOi-2FN6nZbDcHPii5Th8c0OTxCpONd3P75ehJj-2B6Eq-2BrHTERuIkUkpnypNoBNqSvOFM=
  e9Vjmq9pan2YDw-3D-3D>
  Privacy
  <https://email.uber.com/ls/click?upn=3DIb78WjkFQ66GYzavQJcfTaUW2mLjCZlesuzr=
  -2FyzEQzDKq5PxwjJLnlhd3kWpjkC8yEDo_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-=
  2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbg=
  olFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5Lm=
  CeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjl=
  UaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDu=
  F71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4D=
  PeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX=
  3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bm=
  l69mR0zYqOFtHLCsaadoF7HO5vW2NXR1IngBuf9Sp9RgYMNSbBdFplRXaPt-2F3VojpK-2Fk9C3=
  HQpsBa9VAP3-2F6XzjKbbiIpOI0JCIeFQHlesxhItG2B7N67C6ZPfIBvLYp9aVcPmepvUHQf7PJ=
  FhnJQ0soob6omfYSdPzQ9WST69cMYyePFN1rlwX5k4kuIS10nDfOyKiGNmTMjiQ-3D-3D>
  Terms
  <https://email.uber.com/ls/click?upn=3DIb78WjkFQ66GYzavQJcfTaUW2mLjCZlesuzr=
  -2FyzEQzD9L-2F1tKRCOuyZn2F4t4pFGPcAt_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd=
  1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uB=
  bgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5=
  LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EH=
  jlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpi=
  DuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj=
  4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4=
  SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2=
  Bml69mR0zYqOFtHLLe9Q-2FWox5Lucx5RUuiQDt9I-2Fy4zhKIVEiwyTUVaigo15bzh-2B-2BYc=
  lb4dlLL0cVy01kOEOyGcinq7x71mxUD1Xz6M5qZ4SY-2Bdv0kHN5jS2OomdO7udKnXmB1CkqD2z=
  GJkO1QP9HeySLJQD40kllMYL2l9aocB9OcQfe9mAjYLrqDTAoGkiniatLVg2EG7oFBUPw-3D-3D=
  >
  Uber Technologies
  1725 3rd Street,
  San Francisco,
  California
  94158

  --0000000000006984ed06190d2b71
  Content-Type: text/html; charset="UTF-8"
  Content-Transfer-Encoding: quoted-printable

  <div dir=3D"ltr"><br><br><div class=3D"gmail_quote"><div dir=3D"ltr" class=
  =3D"gmail_attr">---------- Forwarded message ---------<br>From: <strong cla=
  ss=3D"gmail_sendername" dir=3D"auto">Uber Receipts</strong> <span dir=3D"au=
  to">&lt;<a href=3D"mailto:noreply@uber.com">noreply@uber.com</a>&gt;</span>=
  <br>Date: Tue, Jan 23, 2024 at 12:25=E2=80=AFPM<br>Subject: Your Tuesday mo=
  rning trip with Uber<br>To:  &lt;<a href=3D"mailto:amanueltesfaye44@gmail.c=
  om">amanueltesfaye44@gmail.com</a>&gt;<br></div><br><br><div class=3D"msg71=
  64883217163996814"><u></u><div style=3D"background-color:#d6d6d5;margin:0;m=
  in-width:100%;padding:0;width:100%"><table width=3D"100%" border=3D"0" cell=
  padding=3D"0" cellspacing=3D"0" style=3D"background-color:#d6d6d5;border:no=
  ne;border-collapse:collapse;border-spacing:0;width:100%" bgcolor=3D"#d6d6d5=
  "><tbody><tr><td align=3D"center"><table width=3D"100%" border=3D"0" cellpa=
  dding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse=
  ;border-spacing:0;max-width:700px;width:100%"><tbody><tr><td style=3D"backg=
  round-color:#fff" align=3D"center"><table width=3D"100%" border=3D"0" cellp=
  adding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collaps=
  e;border-spacing:0;margin:auto;max-width:700px;width:100%"><tbody><tr><td a=
  lign=3D"center"><table width=3D"100%" border=3D"0" cellpadding=3D"0" cellsp=
  acing=3D"0" style=3D"background-color:#fff;border:none;border-collapse:coll=
  apse;border-spacing:0;margin:auto;width:100%" bgcolor=3D"#ffffff"><tbody><t=
  r><td align=3D"center"><table width=3D"100%" border=3D"0" cellpadding=3D"0"=
   cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;border-spa=
  cing:0;width:100%"><tbody><tr><td align=3D"center" style=3D"background-colo=
  r:#fff"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"10=
  0%" style=3D"border:none;border-collapse:collapse;border-spacing:0;width:10=
  0%"><tbody><tr><td><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
  width=3D"100%" style=3D"border:none;border-collapse:collapse;border-spacing=
  :0;width:100%"><tbody><tr><td bgcolor=3D"#ffffff"><table width=3D"100%" bor=
  der=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-c=
  ollapse:collapse;border-spacing:0;width:100%"><tbody><tr><td align=3D"left"=
   style=3D"direction:ltr;text-align:left"><table border=3D"0" cellpadding=3D=
  "0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;border-=
  spacing:0;width:100%"><tbody><tr><td bgcolor=3D"#c6daff" style=3D"direction=
  :ltr;text-align:left"><table width=3D"100%" border=3D"0" cellpadding=3D"0" =
  cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;border-spac=
  ing:0;width:100%"><tbody><tr><td width=3D"14" style=3D"direction:ltr;text-a=
  lign:left">=C2=A0</td><td align=3D"left" style=3D"direction:ltr;text-align:=
  left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"bord=
  er:none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><t=
  d align=3D"center"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
  class=3D"m_7164883217163996814t11of12" align=3D"center" style=3D"border:non=
  e;border-collapse:collapse;border-spacing:0;max-width:616px;width:100%"><tb=
  ody><tr><td align=3D"center" style=3D"font-size:1px;height:1px;line-height:=
  1px;padding-left:0!important;padding-right:0!important"><table border=3D"0"=
   cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t10of12"=
   align=3D"center" style=3D"border:none;border-collapse:collapse;border-spac=
  ing:0;max-width:560px;width:100%"><tbody><tr><td width=3D"12" style=3D"font=
  -size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right=
  :0!important;direction:ltr;text-align:left">=C2=A0</td><td style=3D"font-si=
  ze:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!=
  important;direction:ltr;text-align:left"><table border=3D"0" cellpadding=3D=
  "0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;bo=
  rder-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%"><tbo=
  dy><tr><td style=3D"direction:ltr;text-align:left"><table width=3D"100%" bo=
  rder=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-=
  collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_71=
  64883217163996814logo" align=3D"left" style=3D"padding-top:45px;padding-bot=
  tom:40px;direction:ltr;text-align:left" valign=3D"middle"><table border=3D"=
  0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse=
  :collapse;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_7164883217=
  163996814Uber18_text_p1" valign=3D"top" align=3D"left" width=3D"69" height=
  =3D"24" style=3D"color:#000;font-family:UberMoveText,open sans,helvetica ne=
  ue,Helvetica,sans-serif;line-height:30px;padding-right:12px;padding-top:5px=
  ;direction:ltr;text-align:left"><img src=3D"https://d1a3f4spazzrp4.cloudfro=
  nt.net/receipt_v3/receipt_uber_logo.png" border=3D"0" width=3D"69" style=3D=
  "clear:both;display:block;height:auto;outline:none;text-decoration:none"></=
  td><td class=3D"m_7164883217163996814Uber18_text_p1" width=3D"80%" align=3D=
  "right" style=3D"color:#000;font-family:UberMoveText,open sans,helvetica ne=
  ue,Helvetica,sans-serif;font-size:12px;line-height:18px;text-align:right;di=
  rection:ltr" valign=3D"middle"><div>Total
  <span class=3D"m_7164883217163996814Uber18_text_p2" style=3D"color:#000;fon=
  t-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-si=
  ze:12px;line-height:18px">$19.97</span></div><span class=3D"m_7164883217163=
  996814Uber18_text_p1" style=3D"color:#000;font-family:UberMoveText,open san=
  s,helvetica neue,Helvetica,sans-serif;font-size:12px;line-height:15px">Janu=
  ary 23, 2024</span></td></tr></tbody></table></td></tr></tbody></table></td=
  ></tr></tbody></table></td><td width=3D"12" style=3D"font-size:1px;height:1=
  px;line-height:1px;padding-left:0!important;padding-right:0!important;direc=
  tion:ltr;text-align:left">=C2=A0</td></tr></tbody></table></td></tr></tbody=
  ></table></td></tr></tbody></table></td><td width=3D"14" style=3D"direction=
  :ltr;text-align:left">=C2=A0</td></tr></tbody></table></td></tr></tbody></t=
  able></td></tr></tbody></table><table width=3D"" border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;bord=
  er-spacing:0;width:100%"><tbody><tr><td align=3D"left" style=3D"direction:l=
  tr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0"=
   style=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"=
  ><tbody><tr><td background=3D"https://d1a3f4spazzrp4.cloudfront.net/emails/=
  2017/01/receipt_18_headerbg.png" bgcolor=3D"#c6daff" valign=3D"top" style=
  =3D"background-repeat:no-repeat;background-position:100% 100%;direction:ltr=
  ;text-align:left"><div><div style=3D"font-size:0;line-height:0"><table widt=
  h=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border=
  :none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td =
  width=3D"14" style=3D"direction:ltr;text-align:left">=C2=A0</td><td align=
  =3D"left" style=3D"direction:ltr;text-align:left"><table border=3D"0" cellp=
  adding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collaps=
  e;border-spacing:0;width:100%"><tbody><tr><td align=3D"center"><table borde=
  r=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t=
  11of12" align=3D"center" style=3D"border:none;border-collapse:collapse;bord=
  er-spacing:0;max-width:616px;width:100%"><tbody><tr><td align=3D"center" st=
  yle=3D"font-size:1px;height:1px;line-height:1px;padding-left:0!important;pa=
  dding-right:0!important"><table border=3D"0" cellpadding=3D"0" cellspacing=
  =3D"0" class=3D"m_7164883217163996814t10of12" align=3D"center" style=3D"bor=
  der:none;border-collapse:collapse;border-spacing:0;max-width:560px;width:10=
  0%"><tbody><tr><td width=3D"12" style=3D"font-size:1px;height:1px;line-heig=
  ht:1px;padding-left:0!important;padding-right:0!important;direction:ltr;tex=
  t-align:left">=C2=A0</td><td style=3D"font-size:1px;height:1px;line-height:=
  1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-a=
  lign:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D=
  "100%" align=3D"left" style=3D"border:none;border-collapse:collapse;border-=
  spacing:0;table-layout:fixed;width:100%"><tbody><tr><td style=3D"direction:=
  ltr;text-align:left"><table width=3D"100%" border=3D"0" cellpadding=3D"0" c=
  ellspacing=3D"0" style=3D"border:none;border-collapse:collapse;border-spaci=
  ng:0;width:100%"><tbody><tr><td align=3D"left" style=3D"font-size:0;directi=
  on:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=
  =3D"0" class=3D"m_7164883217163996814t7of12" style=3D"border:none;border-co=
  llapse:collapse;border-spacing:0;display:inline-block;max-width:392px;verti=
  cal-align:bottom;width:100%"><tbody><tr><td style=3D"font-size:1px;height:1=
  px;line-height:1px;padding-left:0!important;padding-right:0!important;direc=
  tion:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=
  =3D"0" width=3D"100%" align=3D"left" style=3D"border:none;border-collapse:c=
  ollapse;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_716488321716=
  3996814Uber18_p3 m_7164883217163996814header_h3" style=3D"color:#000;font-f=
  amily:uber18-medium,Helvetica,Arial,sans-serif;font-size:34px;line-height:3=
  8px;padding-bottom:13px;direction:ltr;text-align:left">Thanks for riding, A=
  MANUEL</td></tr><tr><td class=3D"m_7164883217163996814Uber18_text_p1" style=
  =3D"color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,=
  sans-serif;font-size:16px;line-height:28px;direction:ltr;text-align:left"><=
  table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_716488321=
  7163996814t6of12" align=3D"left" style=3D"border:none;border-collapse:colla=
  pse;border-spacing:0;max-width:308px;width:100%"><tbody><tr><td style=3D"fo=
  nt-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-rig=
  ht:0!important;direction:ltr;text-align:left"><table border=3D"0" cellpaddi=
  ng=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:no=
  ne;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%"=
  ><tbody><tr><td class=3D"m_7164883217163996814Uber18_text_p1 m_716488321716=
  3996814header_Uber18_text_p1" style=3D"color:#000;font-family:UberMoveText,=
  open sans,helvetica neue,Helvetica,sans-serif;font-size:20px;line-height:26=
  px;padding-bottom:40px;direction:ltr;text-align:left">We hope you enjoyed y=
  our ride this morning.</td></tr></tbody></table></td></tr></tbody></table><=
  /td></tr></tbody></table></td></tr></tbody></table><table border=3D"0" cell=
  padding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t3of12 m_7164=
  883217163996814gmail_header_icon_table" style=3D"border:none;border-collaps=
  e:collapse;border-spacing:0;display:inline-block;max-width:144px;vertical-a=
  lign:bottom;width:100%"><tbody><tr><td style=3D"font-size:1px;height:1px;li=
  ne-height:1px;padding-left:0!important;padding-right:0!important;direction:=
  ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
  " width=3D"100%" align=3D"left" style=3D"border:none;border-collapse:collap=
  se;border-spacing:0;table-layout:fixed;width:100%"><tbody><tr><td style=3D"=
  padding-top:0;direction:ltr;text-align:left"><img class=3D"m_71648832171639=
  96814header_icon" src=3D"https://d1a3f4spazzrp4.cloudfront.net/receipt_v3/r=
  eceipt_18_rider_default.png" width=3D"144" height=3D"" border=3D"0" style=
  =3D"clear:both;display:block;height:auto;margin:0 0 0 auto;width:144px;max-=
  height:144px;max-width:144px;outline:none;text-decoration:none" alt=3D""></=
  td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table=
  ></td></tr></tbody></table></td><td width=3D"12" style=3D"font-size:1px;hei=
  ght:1px;line-height:1px;padding-left:0!important;padding-right:0!important;=
  direction:ltr;text-align:left">=C2=A0</td></tr></tbody></table></td></tr></=
  tbody></table></td></tr></tbody></table></td><td width=3D"14" style=3D"dire=
  ction:ltr;text-align:left">=C2=A0</td></tr></tbody></table></div></div></td=
  ></tr></tbody></table></td></tr></tbody></table><table width=3D"100%" borde=
  r=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-col=
  lapse:collapse;border-spacing:0;width:100%;margin-bottom:20px"><tbody><tr><=
  td align=3D"center"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0"=
   style=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"=
  ><tbody><tr><td align=3D"center"><table class=3D"m_7164883217163996814recei=
  pt_body" width=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" st=
  yle=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%" bg=
  color=3D"#ffffff"><tbody><tr><td align=3D"left" bgcolor=3D"#ffffff" style=
  =3D"padding:45px 14px 0;direction:ltr;text-align:left"><table border=3D"0" =
  cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:co=
  llapse;border-spacing:0;width:100%"><tbody><tr><td align=3D"center"><table =
  border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_716488321716399=
  6814t10of12" style=3D"border:none;border-collapse:collapse;border-spacing:0=
  ;max-width:560px;width:100%"><tbody><tr><td style=3D"padding-left:0;padding=
  -right:0"><table width=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=
  =3D"0" style=3D"border:none;border-collapse:collapse;border-spacing:0;width=
  :100%"><tbody><tr><td align=3D"left" style=3D"padding-left:12px;padding-rig=
  ht:12px"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"b=
  order:none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr=
  ><td class=3D"m_7164883217163996814Uber18_p3 m_7164883217163996814total_hea=
  d" valign=3D"top" align=3D"left" style=3D"color:#000;font-family:UberMoveTe=
  xt,open sans,helvetica neue,Helvetica,sans-serif;font-size:44px;line-height=
  :44px;padding-right:12px;direction:ltr;text-align:left">Total</td><td class=
  =3D"m_7164883217163996814Uber18_p3 m_7164883217163996814total_head" valign=
  =3D"top" align=3D"right" style=3D"color:#000;font-family:UberMoveText,open =
  sans,helvetica neue,Helvetica,sans-serif;font-size:44px;line-height:44px;te=
  xt-align:right;direction:ltr">$19.97</td></tr></tbody></table></td></tr></t=
  body></table><table width=3D"100%" border=3D"0" cellpadding=3D"0" cellspaci=
  ng=3D"0" style=3D"border:none;border-collapse:collapse;border-spacing:0;wid=
  th:100%"><tbody><tr><td align=3D"left" style=3D"padding-left:12px;padding-r=
  ight:12px"></td></tr></tbody></table><table width=3D"100%" border=3D"0" cel=
  lpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:colla=
  pse;border-spacing:0;width:100%"><tbody><tr><td align=3D"left" style=3D"pad=
  ding-left:12px;padding-right:12px"><table border=3D"0" cellpadding=3D"0" ce=
  llspacing=3D"0" width=3D"100%" style=3D"border:none;border-collapse:collaps=
  e;border-spacing:0;width:100%"><tbody><tr><td style=3D"padding-top:26px;pad=
  ding-bottom:26px"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" w=
  idth=3D"100%" align=3D"left" style=3D"border:none;border-collapse:collapse;=
  border-spacing:0;table-layout:fixed;width:100%"><tbody><tr><td valign=3D"to=
  p" align=3D"left" style=3D"font-size:1px;line-height:1px;background-color:#=
  009eb7">=C2=A0</td></tr></tbody></table></td></tr></tbody></table></td></tr=
  ></tbody></table><table width=3D"100%" border=3D"0" cellpadding=3D"0" cells=
  pacing=3D"0" style=3D"border:none;border-collapse:collapse;border-spacing:0=
  ;width:100%"><tbody><tr><td align=3D"left" style=3D"padding-left:12px;paddi=
  ng-right:12px"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" widt=
  h=3D"100%" style=3D"border:none;border-collapse:collapse;border-spacing:0;w=
  idth:100%"><tbody><tr><td class=3D"m_7164883217163996814Uber18_text_p1" val=
  ign=3D"top" align=3D"left" style=3D"color:#000;font-family:UberMoveText,ope=
  n sans,helvetica neue,Helvetica,sans-serif;font-size:16px;line-height:28px;=
  padding-bottom:5px;padding-right:12px;padding-top:5px;direction:ltr;text-al=
  ign:left">Trip fare</td><td class=3D"m_7164883217163996814Uber18_text_p1" v=
  align=3D"top" align=3D"right" style=3D"color:#000;font-family:UberMoveText,=
  open sans,helvetica neue,Helvetica,sans-serif;font-size:16px;line-height:28=
  px;padding-bottom:5px;padding-right:0;padding-top:5px;text-align:right;dire=
  ction:ltr">$16.65</td></tr></tbody></table><table border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" width=3D"100%" style=3D"border:none;border-collaps=
  e:collapse;border-spacing:0;width:100%"><tbody><tr><td style=3D"padding-top=
  :26px;padding-bottom:26px"><table border=3D"0" cellpadding=3D"0" cellspacin=
  g=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;border-collapse:=
  collapse;border-spacing:0;table-layout:fixed;width:100%"><tbody><tr><td val=
  ign=3D"top" align=3D"left" style=3D"font-size:1px;line-height:1px;backgroun=
  d-color:#bdbdbd">=C2=A0</td></tr></tbody></table></td></tr></tbody></table>=
  <table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" styl=
  e=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"><tbo=
  dy><tr><td class=3D"m_7164883217163996814Uber18_text_p3" valign=3D"top" ali=
  gn=3D"left" style=3D"color:#000;font-family:UberMoveText,open sans,helvetic=
  a neue,Helvetica,sans-serif;font-size:16px;line-height:28px;padding-bottom:=
  5px;padding-right:12px;padding-top:5px;direction:ltr;text-align:left">Subto=
  tal</td><td class=3D"m_7164883217163996814Uber18_text_p3" valign=3D"top" al=
  ign=3D"right" style=3D"color:#000;font-family:UberMoveText,open sans,helvet=
  ica neue,Helvetica,sans-serif;font-size:16px;line-height:28px;padding-botto=
  m:5px;padding-top:5px;text-align:right;direction:ltr">$16.65</td></tr></tbo=
  dy></table><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D=
  "100%" style=3D"border:none;border-collapse:collapse;border-spacing:0;width=
  :100%"><tbody><tr><td class=3D"m_7164883217163996814Uber18_text_p1" valign=
  =3D"top" align=3D"left" style=3D"color:#000;font-family:UberMoveText,open s=
  ans,helvetica neue,Helvetica,sans-serif;font-size:16px;line-height:28px;pad=
  ding-bottom:5px;padding-right:12px;padding-top:5px;direction:ltr;text-align=
  :left">Wait Time
  <a href=3D"https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15UjLJqi=
  79aYPwlG9ebBhI-2BjzlDzoIe4eyE-2BGu7Ngh4JAV5Mj4mFsJc3CE7GOiXQye5ZEWBbH-2FUz1=
  nJCwoijOMiTcM0xHgvi1kjT5A65ukv4EKjkgvfsKsXf-2BjRbK-2FA1cQ6A-3D-3DSVyw_jO-2B=
  LgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6Odlkhc=
  G3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjv=
  rpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSy=
  w-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTA=
  AnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHd=
  iqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrV=
  UiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWh=
  hY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLNebANBlLDKngYaZ27cfb1SjjsM=
  Ep-2ByGileWjhazTg-2FIRDKM2iGolJEVEobdBL8RKX-2BdVHXQDaTikYGGtQY5yqWyBPQsHGX7=
  TcGS3BtKRlkGIXxZze-2BB1j8yGh7rX80lqTbigQT-2Fd5Y1NJjpKda5wR14hiMbC-2F7NaK5BA=
  oOkmw4jBksjz661ODGh9fhudv3C0g-3D-3D" style=3D"padding-left:5px" target=3D"_=
  blank"><img src=3D"https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/rr_=
  rider_blue-Icon_15x15_2x.png" width=3D"15" height=3D"15" border=3D"0" style=
  =3D"border:none;clear:both;display:inline-block;height:15px;max-width:100%;=
  outline:none;text-decoration:none;width:15px"></a></td><td class=3D"m_71648=
  83217163996814Uber18_text_p1" valign=3D"top" align=3D"right" style=3D"color=
  :#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-seri=
  f;font-size:16px;line-height:28px;padding-bottom:5px;padding-right:0;paddin=
  g-top:5px;text-align:right;direction:ltr">$0.34</td></tr></tbody></table><t=
  able border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" style=
  =3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"><tbod=
  y><tr><td class=3D"m_7164883217163996814Uber18_text_p1" valign=3D"top" alig=
  n=3D"left" style=3D"color:#000;font-family:UberMoveText,open sans,helvetica=
   neue,Helvetica,sans-serif;font-size:16px;line-height:28px;padding-bottom:5=
  px;padding-right:12px;padding-top:5px;direction:ltr;text-align:left">Bookin=
  g Fee
  <a href=3D"https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGltwScN15UjLJqi=
  79aYPwlG9ebBhI-2Bjy8q0fKaKOpyo4yLcf8H-2FTSpZYPamdl-2FmUc2Z3BsR6labjreZ4ZT4p=
  -2FvMMMkMfHb-2BHMKu8xJJ04PW5X1mehPXLp0CfEBShYD68EYhreSmNs6b0VszOyL0xhfiSzR-=
  2F-2Butq0-3DNbHR_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8=
  A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpc=
  VWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6R=
  ZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-=
  2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGM=
  PBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJE=
  kDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZ=
  cGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLB7bT=
  PVwxXOy0TT7DPGXral4echn-2BgORE2NcU1Wb-2FmgXe4aOkpQKMxO6qGGMcrAuXFBxSTqqOLmB=
  lybaZEgkOpD6B91xFX5eDhdApU4DyRJo8QnHInJrEhS-2F1DcpypIG2SKvcEZNV-2FBHvWddJB4=
  YDHwpEPb83kyx9OCUToQzVqLXUaAJEVteNg-2FQ-2FjvzRvqQ-2Fg-3D-3D" style=3D"paddi=
  ng-left:5px" target=3D"_blank"><img src=3D"https://d1a3f4spazzrp4.cloudfron=
  t.net/emails/2017/01/rr_rider_blue-Icon_15x15_2x.png" width=3D"15" height=
  =3D"15" border=3D"0" style=3D"border:none;clear:both;display:inline-block;h=
  eight:15px;max-width:100%;outline:none;text-decoration:none;width:15px"></a=
  ></td><td class=3D"m_7164883217163996814Uber18_text_p1" valign=3D"top" alig=
  n=3D"right" style=3D"color:#000;font-family:UberMoveText,open sans,helvetic=
  a neue,Helvetica,sans-serif;font-size:16px;line-height:28px;padding-bottom:=
  5px;padding-right:0;padding-top:5px;text-align:right;direction:ltr">$3.82</=
  td></tr></tbody></table><table border=3D"0" cellpadding=3D"0" cellspacing=
  =3D"0" width=3D"100%" style=3D"border:none;border-collapse:collapse;border-=
  spacing:0;width:100%"><tbody><tr><td class=3D"m_7164883217163996814Uber18_t=
  ext_p1" valign=3D"top" align=3D"left" style=3D"color:#000;font-family:UberM=
  oveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:16px;line-h=
  eight:28px;padding-bottom:5px;padding-right:12px;padding-top:5px;direction:=
  ltr;text-align:left">Promotion</td><td class=3D"m_7164883217163996814Uber18=
  _text_p1" valign=3D"top" align=3D"right" style=3D"color:#080;font-family:Ub=
  erMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:16px;lin=
  e-height:28px;padding-bottom:5px;padding-top:5px;text-align:right;white-spa=
  ce:nowrap;direction:ltr">-$1.04</td></tr></tbody></table><table border=3D"0=
  " cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" style=3D"border:none;b=
  order-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td class=
  =3D"m_7164883217163996814Uber18_text_p1" valign=3D"top" align=3D"left" styl=
  e=3D"color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica=
  ,sans-serif;font-size:16px;line-height:28px;padding-bottom:5px;padding-righ=
  t:12px;padding-top:5px;direction:ltr;text-align:left">Texas Regulatory Reco=
  very Fee</td><td class=3D"m_7164883217163996814Uber18_text_p1" valign=3D"to=
  p" align=3D"right" style=3D"color:#000;font-family:UberMoveText,open sans,h=
  elvetica neue,Helvetica,sans-serif;font-size:16px;line-height:28px;padding-=
  bottom:5px;padding-right:0;padding-top:5px;text-align:right;direction:ltr">=
  $0.20</td></tr></tbody></table></td></tr></tbody></table><table border=3D"0=
  " cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" style=3D"border:none;b=
  order-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td style=
  =3D"padding-top:26px;padding-bottom:26px"><table border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none=
  ;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%"><=
  tbody><tr><td valign=3D"top" align=3D"left" style=3D"font-size:1px;line-hei=
  ght:1px;background-color:#bdbdbd">=C2=A0</td></tr></tbody></table></td></tr=
  ></tbody></table><table width=3D"100%" border=3D"0" cellpadding=3D"0" cells=
  pacing=3D"0" style=3D"border:none;border-collapse:collapse;border-spacing:0=
  ;width:100%"><tbody><tr><td align=3D"left" style=3D"padding-left:12px;paddi=
  ng-right:12px;direction:ltr;text-align:left"><table border=3D"0" cellpaddin=
  g=3D"0" cellspacing=3D"0" width=3D"100%" style=3D"border:none;border-collap=
  se:collapse;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_71648832=
  17163996814Uber18_text_p2" valign=3D"top" align=3D"left" style=3D"color:#00=
  0;font-family:uber18-text-bold,helveticaneue-light,helvetica neue light,Hel=
  vetica,Arial,sans-serif;font-size:16px;line-height:20px;padding-bottom:5px;=
  padding-right:12px;padding-top:5px;direction:ltr;text-align:left">Payments<=
  /td><td class=3D"m_7164883217163996814Uber18_text_p1" valign=3D"top" align=
  =3D"right" style=3D"color:#000;font-family:uber18-text-regular,helveticaneu=
  e-light,helvetica neue light,Helvetica,Arial,sans-serif;font-size:16px;line=
  -height:28px;padding-bottom:5px;padding-top:5px;direction:ltr;text-align:le=
  ft">=C2=A0</td></tr></tbody></table><table border=3D"0" cellpadding=3D"0" c=
  ellspacing=3D"0" width=3D"100%" style=3D"border:none;border-collapse:collap=
  se;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_71648832171639968=
  14Uber18_text_p1 m_7164883217163996814mobileCard_b_pad" valign=3D"middle" a=
  lign=3D"left" style=3D"color:#000;font-family:uber18-text-regular,helvetica=
  neue-light,helvetica neue light,Helvetica,Arial,sans-serif;font-size:16px;l=
  ine-height:28px;padding-bottom:5px;padding-right:12px;padding-top:5px;direc=
  tion:ltr;text-align:left"><table width=3D"100%" border=3D"0" cellpadding=3D=
  "0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;border-=
  spacing:0;width:100%"><tbody><tr><td align=3D"left" style=3D"direction:ltr;=
  text-align:left"><table align=3D"left" width=3D"initial" border=3D"0" cellp=
  adding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collaps=
  e;border-spacing:0;width:initial"><tbody><tr><td align=3D"left" width=3D"55=
  " style=3D"padding-top:2px;padding-bottom:2px;direction:ltr;text-align:left=
  "><img src=3D"https://tb-static.uber.com/prod/wallet/icons/visa_3x.png" wid=
  th=3D"35" height=3D"32" border=3D"0" style=3D"clear:both;display:inline-blo=
  ck;height:32px;max-width:100%;outline:none;padding-right:18px;text-decorati=
  on:none;vertical-align:middle;width:32px"></td></tr></tbody></table><table =
  align=3D"left" width=3D"initial" border=3D"0" cellpadding=3D"0" cellspacing=
  =3D"0" style=3D"border:none;border-collapse:collapse;border-spacing:0;width=
  :initial"><tbody><tr><td class=3D"m_7164883217163996814Uber18_text_p1" alig=
  n=3D"left" style=3D"color:#000;font-family:uber18-text-regular,helveticaneu=
  e-light,helvetica neue light,Helvetica,Arial,sans-serif;font-size:16px;line=
  -height:20px;padding-bottom:2px;padding-right:5px;padding-top:2px;direction=
  :ltr;text-align:left;font-weight:bolder">Visa =E2=80=A2=E2=80=A2=E2=80=A2=
  =E2=80=A25006</td></tr><tr><td class=3D"m_7164883217163996814Uber18_text_p1=
  " align=3D"left" style=3D"color:#757575;font-family:uber18-text-regular,hel=
  veticaneue-light,helvetica neue light,Helvetica,Arial,sans-serif;font-size:=
  14px;line-height:20px;padding-bottom:2px;padding-right:5px;padding-top:0;di=
  rection:ltr;text-align:left">1/23/24 12:25 PM</td></tr></tbody></table></td=
  ></tr></tbody></table></td><td class=3D"m_7164883217163996814Uber18_text_p3=
  " valign=3D"middle" align=3D"right" style=3D"color:#000;font-family:uber18-=
  text-medium,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;padd=
  ing-bottom:10px;padding-top:10px;text-align:right;direction:ltr;vertical-al=
  ign:top">$19.97</td></tr></tbody></table></td></tr></tbody></table><table w=
  idth=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"bor=
  der:none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><=
  td align=3D"left" style=3D"padding-left:12px;padding-right:12px"></td></tr>=
  </tbody></table><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" wid=
  th=3D"100%" style=3D"border:none;border-collapse:collapse;border-spacing:0;=
  direction:rtl;width:100%"><tbody><tr><td valign=3D"top" align=3D"left" styl=
  e=3D"color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica=
  ,sans-serif;font-size:0;line-height:28px;padding:5px 12px;text-align:left;d=
  irection:ltr"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=
  =3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"><tbod=
  y><tr><td style=3D"direction:ltr;text-align:left"><table border=3D"0" cellp=
  adding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t7of12" style=
  =3D"border:none;border-collapse:collapse;border-spacing:0;direction:ltr;dis=
  play:inline-block;max-width:392px;vertical-align:top;width:100%"><tbody><tr=
  ><td style=3D"padding:6px 0;direction:ltr;text-align:left"><table border=3D=
  "0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=
  =3D"border:none;border-collapse:collapse;border-spacing:0;table-layout:fixe=
  d;width:100%"><tbody><tr><td style=3D"direction:ltr;text-align:left"><table=
   border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;bord=
  er-collapse:collapse;border-spacing:0;table-layout:auto;width:100%"><tbody>=
  <tr><td align=3D"left" class=3D"m_7164883217163996814Uber18_text_p2" style=
  =3D"color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,=
  sans-serif;font-size:16px;line-height:20px;text-align:left;direction:ltr"><=
  a href=3D"https://email.uber.com/ls/click?upn=3D9O-2F0uOvVudG71uY6JZBiNBA2k=
  J1h0T8XTI4yLNm5MdkRmeYD8zHAW7jbHbmeOzb5HiZ6J0i-2BudKalnQzkc5Zsw-3D-3Dsxwa_j=
  O-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6Od=
  lkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEs=
  FBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FI=
  SBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2Y=
  nzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07P=
  vYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvV=
  JJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxF=
  SVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLDddVU6Wt7-2FSxQdEdx9Tn=
  HMzs-2F9eTSwSuaPVo9QC5vlxjM-2B-2Bh1v6rh4p1BHYoY9FXr4-2BDtPn0n8DwODraVe3OGwZ=
  4NH7Jmf6dNUhnSMqeht19rsIjmuZF2clL1RqmEOs79TnvHdA-2F65yhr14ap00Ah9Vgv37kdD6s=
  hah8q-2FXjR0qa00l3WhTxjsJal3q7vUU4Q-3D-3D" style=3D"text-decoration:none;co=
  lor:#276ef1" target=3D"_blank">Switch Payment Method</a></td></tr></tbody><=
  /table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbod=
  y></table></td></tr></tbody></table><table border=3D"0" cellpadding=3D"0" c=
  ellspacing=3D"0" width=3D"100%" style=3D"border:none;border-collapse:collap=
  se;border-spacing:0;direction:rtl;width:100%"><tbody><tr><td valign=3D"top"=
   align=3D"left" style=3D"color:#000;font-family:UberMoveText,open sans,helv=
  etica neue,Helvetica,sans-serif;font-size:0;line-height:28px;padding:5px 12=
  px;text-align:left;direction:ltr"><table border=3D"0" cellpadding=3D"0" cel=
  lspacing=3D"0" style=3D"border:none;border-collapse:collapse;border-spacing=
  :0;width:100%"><tbody><tr><td style=3D"direction:ltr;text-align:left"><tabl=
  e border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163=
  996814t7of12" style=3D"border:none;border-collapse:collapse;border-spacing:=
  0;direction:ltr;display:inline-block;max-width:392px;vertical-align:top;wid=
  th:100%"><tbody><tr><td style=3D"padding:6px 0;direction:ltr;text-align:lef=
  t"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" a=
  lign=3D"left" style=3D"border:none;border-collapse:collapse;border-spacing:=
  0;table-layout:fixed;width:100%"><tbody><tr><td style=3D"direction:ltr;text=
  -align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=
  =3D"border:none;border-collapse:collapse;border-spacing:0;table-layout:auto=
  ;width:100%"><tbody><tr><td align=3D"left" class=3D"m_7164883217163996814Ub=
  er18_text_p2" style=3D"color:#000;font-family:UberMoveText,open sans,helvet=
  ica neue,Helvetica,sans-serif;font-size:16px;line-height:20px;text-align:le=
  ft;direction:ltr"><a href=3D"https://email.uber.com/ls/click?upn=3DspA0-2FY=
  -2B4siX2BcQou8-2F48-2FCuAvuoJdGqwWnZ4u-2BoGRt2G3MHR2-2FvLzKBEg7w920-2BhXZ4T=
  su-2BA-2B33WAQBSomrim0dlsobKL39doLIyLJx6XYXUazZ1fmc7bYR0-2FRWDrR4u36iVZRXqq=
  MKX76E4GjqBA-3D-3DILdZ_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2B=
  Fu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2=
  MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusb=
  tsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYP=
  zIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBh=
  YuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0dj=
  FasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcX=
  xz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFt=
  HLAZHf5mDKvseDiosgL5HuOIyj1env-2BqbeI-2FAYVBfKob9d5Jy82Gm2x4sesj-2Bjm32d-2B=
  VJ4ELp6u6KIjOVWMCEL-2FnNJWNTZZeWGFx0mcsoP698ZSH7PzKMpQd-2F5lu1SmiWurMpVfnmh=
  V74BJpQUwJoddk-2BPUVspyxan-2FzLIuLku5IpwO2-2Fy7Yd5OE3xsEUpbJEHw-3D-3D" styl=
  e=3D"text-decoration:none;color:#276ef1" target=3D"_blank">Download PDF</a>=
  </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></tab=
  le></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></=
  table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody=
  ></table></td></tr></tbody></table><table width=3D"100%" border=3D"0" cellp=
  adding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collaps=
  e;border-spacing:0;width:100%"><tbody><tr><td align=3D"left" style=3D"backg=
  round-color:#f8f8fa;padding:0 14px;direction:ltr;text-align:left"><table bo=
  rder=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-=
  collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td style=3D"dire=
  ction:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacin=
  g=3D"0" class=3D"m_7164883217163996814t1of12" align=3D"left" style=3D"borde=
  r:none;border-collapse:collapse;border-spacing:0;max-width:56px;width:100%"=
  ><tbody><tr><td style=3D"font-size:1px;height:1px;line-height:1px;padding-l=
  eft:0!important;padding-right:0!important;direction:ltr;text-align:left"><t=
  able border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" align=
  =3D"left" style=3D"border:none;border-collapse:collapse;border-spacing:0;ta=
  ble-layout:fixed;width:100%"><tbody><tr><td style=3D"line-height:1px;font-s=
  ize:1px;direction:ltr;text-align:left">=C2=A0</td></tr></tbody></table></td=
  ></tr></tbody></table><table border=3D"0" cellpadding=3D"0" cellspacing=3D"=
  0" class=3D"m_7164883217163996814t11of12" align=3D"left" style=3D"border:no=
  ne;border-collapse:collapse;border-spacing:0;max-width:616px;width:100%"><t=
  body><tr><td style=3D"padding:22px 12px;direction:ltr;text-align:left"><tab=
  le border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" align=3D=
  "left" style=3D"border:none;border-collapse:collapse;border-spacing:0;table=
  -layout:fixed;width:100%"><tbody><tr><td class=3D"m_7164883217163996814Uber=
  18_text_p2" align=3D"left" style=3D"color:#000;font-family:uber18-text-bold=
  ,helveticaneue-light,helvetica neue light,Helvetica,Arial,sans-serif;font-s=
  ize:22px;line-height:28px;direction:ltr;text-align:left;padding-bottom:15px=
  " valign=3D"middle">You rode with Cynthia</td></tr><tr><td class=3D"m_71648=
  83217163996814Uber18_text_p1" style=3D"color:#000;font-family:UberMoveText,=
  open sans,helvetica neue,Helvetica,sans-serif;font-size:0;line-height:28px;=
  direction:ltr;text-align:left"><table width=3D"100%" border=3D"0" cellpaddi=
  ng=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse"><=
  tbody><tr><td align=3D"left" style=3D"padding-bottom:15px"><table border=3D=
  "0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t4of1=
  2" style=3D"border:none;border-collapse:collapse;border-spacing:0;display:i=
  nline-block;max-width:224px;vertical-align:top;width:100%"><tbody><tr><td s=
  tyle=3D"padding-bottom:10px"><table border=3D"0" cellpadding=3D"0" cellspac=
  ing=3D"0" width=3D"initial" align=3D"left" style=3D"table-layout:auto"><tbo=
  dy><tr><td class=3D"m_7164883217163996814Uber18_text_p2" align=3D"left" sty=
  le=3D"color:#000;font-family:uber18-text-bold,helveticaneue-light,helvetica=
   neue light,Helvetica,Arial,sans-serif;font-size:12px;line-height:18px;dire=
  ction:ltr;text-align:left;padding-right:2px" valign=3D"middle">4.92</td><td=
   style=3D"padding-right:3px;padding-top:2px" valign=3D"top"><img src=3D"htt=
  ps://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/STAR.png" width=
  =3D"11" height=3D"" style=3D"display:block;width:100%;max-width:11px;height=
  :auto;outline:none;text-decoration:none" border=3D"0" alt=3D""></td><td cla=
  ss=3D"m_7164883217163996814Uber18_text_p1" style=3D"color:#000;font-family:=
  uber18-text-regular,helveticaneue-light,helvetica neue light,Helvetica,Aria=
  l,sans-serif;font-size:12px;line-height:18px;direction:ltr;text-align:left"=
  >Rating</td></tr></tbody></table></td></tr></tbody></table><table border=3D=
  "0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t6of1=
  2" dir=3D"ltr" style=3D"border:none;border-collapse:collapse;border-spacing=
  :0;max-width:336px;width:100%;display:inline-block;vertical-align:top;width=
  :100%"><tbody><tr><td style=3D"padding-bottom:10px"><table border=3D"0" cel=
  lpadding=3D"0" cellspacing=3D"0" width=3D"initial" align=3D"left" style=3D"=
  table-layout:auto"><tbody><tr><td style=3D"padding-right:15px"><img src=3D"=
  https://d3smpkehiq8afm.cloudfront.net/email/2020/03/mt_receipt/IC2_Person.p=
  ng" width=3D"13" height=3D"" border=3D"0" style=3D"border-radius:50%;clear:=
  both;display:block;height:auto;max-height:13px;max-width:13px;outline:none;=
  text-decoration:none;width:13px"></td><td class=3D"m_7164883217163996814Ube=
  r18_text_p1" style=3D"color:#000;font-family:uber18-text-regular,helvetican=
  eue-light,helvetica neue light,Helvetica,Arial,sans-serif;font-size:12px;li=
  ne-height:18px;direction:ltr;text-align:left">Has passed a multi-step safet=
  y screen</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><=
  td class=3D"m_7164883217163996814Uber18_text_p1" valign=3D"top" align=3D"le=
  ft" style=3D"color:#000;font-family:uber18-text-regular,helveticaneue-light=
  ,helvetica neue light,Helvetica,Arial,sans-serif;font-size:16px;line-height=
  :22px;padding-bottom:22px;padding-right:12px;padding-top:0;direction:ltr;te=
  xt-align:left">Drivers are critical to communities right now. Say thanks wi=
  th a tip.</td></tr><tr><td><div class=3D"m_7164883217163996814btn m_7164883=
  217163996814cta" lang=3D"x-btn" style=3D"font-family:uber18-text-bold,helve=
  ticaneue-light,helvetica neue light,Helvetica,Arial,sans-serif;font-size:14=
  px;line-height:20px;text-transform:none"><a href=3D"https://email.uber.com/=
  ls/click?upn=3DspA0-2FY-2B4siX2BcQou8-2F48-2FCuAvuoJdGqwWnZ4u-2BoGRt2G3MHR2=
  -2FvLzKBEg7w920-2BhXZ4Tsu-2BA-2B33WAQBSomrilAKNW9LiyjNGV4o9KNm17o-3D8sGq_jO=
  -2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6Odl=
  khcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsF=
  BjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FIS=
  BSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2Yn=
  zTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07Pv=
  YHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJ=
  JrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFS=
  VWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLBEaRTt4wdqdjTdAjzrn-2Ff=
  rCxs-2F-2BgaVCslRl-2FQI4YhA2dfFHJL2jU0legWdbTN4N-2FyzJJ30EEEO9wQxuk9UaX1lNO=
  FWMdOBgPlSpPw-2FiOYNumeP9caIPBgWQdGasHc0f7MKEDpz7JHhcjGsyXX-2FgAbY3LnUs0JnY=
  8BeAgbfDHJVrKgW-2Fw7SSTxcGS8ldyxdDqQ-3D-3D" style=3D"background-color:#276e=
  f1;border-color:#276ef1;border-radius:0;border-style:solid;border-width:13p=
  x 16px;color:#fff;display:inline-block;letter-spacing:1px;max-width:300px;m=
  in-width:100px;text-align:center;text-decoration:none;font-family:uber18-te=
  xt-bold,helveticaneue-light,helvetica neue light,Helvetica,Arial,sans-serif=
  " target=3D"_blank"><span style=3D"text-align:left">Rate or tip</span></a><=
  /div></td></tr></tbody></table><table border=3D"0" cellpadding=3D"0" cellsp=
  acing=3D"0" class=3D"m_7164883217163996814t10of12" style=3D"border:none;bor=
  der-collapse:collapse;border-spacing:0;max-width:575px;width:100%"><tbody><=
  tr><td style=3D"direction:ltr;text-align:left"><table border=3D"0" cellpadd=
  ing=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:n=
  one;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%=
  "></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></t=
  body></table></td></tr></tbody></table></td></tr></tbody></table><table wid=
  th=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"borde=
  r:none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td=
   align=3D"left" style=3D"background-color:#f8f8fa;padding:0 14px;direction:=
  ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
  " style=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%=
  "><tbody><tr><td style=3D"direction:ltr;text-align:left"><table border=3D"0=
  " cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t10of12=
  " align=3D"center" style=3D"margin:0 auto;border:none;border-collapse:colla=
  pse;border-spacing:0;max-width:560px;width:100%"><tbody><tr><td style=3D"pa=
  dding:12px 12px 30px;direction:ltr;text-align:left"><table border=3D"0" cel=
  lpadding=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"bor=
  der:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width=
  :100%"><tbody><tr><td class=3D"m_7164883217163996814Uber18_text_p1" valign=
  =3D"top" align=3D"left" style=3D"color:#4e545b;font-family:uber18-text-regu=
  lar,helveticaneue-light,helvetica neue light,Helvetica,Arial,sans-serif;fon=
  t-size:16px;line-height:22px;padding-bottom:10px;padding-right:12px;padding=
  -top:0;direction:ltr;text-align:left">When you ride with Uber, your trips a=
  re insured in case of a covered accident.</td></tr><tr><td><span class=3D"m=
  _7164883217163996814cta" lang=3D"x-textcta" align=3D"left" style=3D"font-fa=
  mily:uber18-text-bold,Helvetica,Arial,sans-serif!important;font-size:14px;l=
  ine-height:20px;text-transform:none;direction:ltr;text-align:left"><a href=
  =3D"https://email.uber.com/ls/click?upn=3DIb78WjkFQ66GYzavQJcfTQZ5KFOAdmdox=
  hGmos3y6RyIXdn6JDq6NPTO5Z-2FwknEpM1Ib_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgx=
  d1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2u=
  BbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb=
  5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4E=
  HjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICp=
  iDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2B=
  j4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y=
  4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-=
  2Bml69mR0zYqOFtHLOgnfId83-2FtqURfAV5VF3UBMS4jBjZICi4YcxdIJp-2F1oXP1fBUHWBcy=
  i4R3kcS6KyYoKLKaQg3mpcHwslWqT8G9QOYhnENJ5QoJIgpoeXv0KhpC2qlXul8jH5gZ8esrc8W=
  cYenAGHGKXz0DOPywOeZKP2u7YKMxtNfTu5fwD-2FhP7RNpTibFSGQGI03W2deqvow-3D-3D" s=
  tyle=3D"text-decoration:none;color:#276ef1" target=3D"_blank">Learn more
  <span style=3D"padding-left:2px">=E2=9D=AF</span></a></span></td></tr></tbo=
  dy></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></=
  tbody></table><table width=3D"100%" border=3D"0" cellpadding=3D"0" cellspac=
  ing=3D"0" style=3D"border:none;border-collapse:collapse;border-spacing:0;wi=
  dth:100%"><tbody><tr><td align=3D"left" style=3D"background-color:#fff;padd=
  ing:50px 14px 20px;direction:ltr;text-align:left"><table border=3D"0" cellp=
  adding=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collaps=
  e;border-spacing:0;width:100%"><tbody><tr><td align=3D"center"><table borde=
  r=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t=
  1of12" align=3D"left" style=3D"border:none;border-collapse:collapse;border-=
  spacing:0;max-width:56px;width:100%"><tbody><tr><td style=3D"font-size:1px;=
  height:1px;line-height:1px;padding-left:0!important;padding-right:0!importa=
  nt;direction:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cel=
  lspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;border-co=
  llapse:collapse;border-spacing:0;table-layout:fixed;width:100%"><tbody><tr>=
  <td style=3D"font-size:1px;line-height:1px;height:1px;min-height:1px;direct=
  ion:ltr;text-align:left">=C2=A0</td></tr></tbody></table></td></tr></tbody>=
  </table><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_=
  7164883217163996814t11of12" style=3D"border:none;border-collapse:collapse;b=
  order-spacing:0;max-width:616px;width:100%"><tbody><tr><td style=3D"padding=
  -left:0;padding-right:0;direction:ltr;text-align:left"><table border=3D"0" =
  cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"=
  border:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;wi=
  dth:100%"><tbody><tr><td align=3D"left" style=3D"direction:ltr;text-align:l=
  eft"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"initi=
  al" style=3D"border:none;border-collapse:collapse;border-spacing:0;table-la=
  yout:auto;width:initial"><tbody><tr><td style=3D"padding-left:12px;padding-=
  right:17px;padding-top:1px;direction:ltr;text-align:left" align=3D"left" va=
  lign=3D"middle"><div class=3D"m_7164883217163996814Uber18_text_p1" style=3D=
  "background-color:#000;border-radius:20px;color:#fff;font-family:UberMoveTe=
  xt,open sans,helvetica neue,Helvetica,sans-serif;font-size:12px;line-height=
  :12px;padding:5px 12px">UberX</div></td><td class=3D"m_7164883217163996814U=
  ber18_text_p1" valign=3D"middle" align=3D"left" style=3D"color:#595959;font=
  -family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-siz=
  e:16px;line-height:28px;white-space:nowrap;direction:ltr;text-align:left">1=
  8.84 miles | 34 min</td></tr></tbody></table><table border=3D"0" cellpaddin=
  g=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t5of12" align=3D"le=
  ft" style=3D"border:none;border-collapse:collapse;border-spacing:0;directio=
  n:ltr;max-width:280px;width:100%"><tbody><tr><td style=3D"padding:20px 12px=
  ;direction:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cells=
  pacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;border-coll=
  apse:collapse;border-spacing:0;table-layout:fixed;width:100%"><tbody><tr><t=
  d align=3D"left" style=3D"direction:ltr;text-align:left"><table border=3D"0=
  " cellpadding=3D"0" cellspacing=3D"0" width=3D"initial" style=3D"border:non=
  e;border-collapse:collapse;border-spacing:0;table-layout:auto;width:100%"><=
  tbody><tr><td width=3D"4" style=3D"width:4px;font-size:1px;line-height:1px"=
   valign=3D"top"><img src=3D"https://d1a3f4spazzrp4.cloudfront.net/emails/20=
  17/01/receipt/receipt_18_square_top_fill_left.png" width=3D"4" height=3D"17=
  " border=3D"0" style=3D"clear:both;display:block;height:17px;max-width:100%=
  ;outline:none;text-decoration:none;width:4px"></td><td style=3D"font-size:1=
  px;line-height:1px;width:1px;background-color:#000" valign=3D"top"><img src=
  =3D"https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/receipt_18=
  _square_top_fill_middle.png" width=3D"1" height=3D"17" border=3D"0" style=
  =3D"clear:both;display:block;height:17px;max-width:100%;outline:none;text-d=
  ecoration:none;width:1px"></td><td width=3D"3" style=3D"width:3px;font-size=
  :1px;line-height:1px" valign=3D"top"><img src=3D"https://d1a3f4spazzrp4.clo=
  udfront.net/emails/2017/01/receipt/receipt_18_square_top_fill_right.png" wi=
  dth=3D"3" height=3D"17" border=3D"0" style=3D"clear:both;display:block;heig=
  ht:17px;max-width:100%;outline:none;text-decoration:none;width:3px"></td><t=
  d class=3D"m_7164883217163996814Uber18_text_p2" valign=3D"top" style=3D"col=
  or:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-se=
  rif;font-size:16px;line-height:28px;padding-bottom:28px;padding-left:34px;d=
  irection:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspa=
  cing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;border-collap=
  se:collapse;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_71648832=
  17163996814Uber18_text_p2" valign=3D"top" align=3D"left" style=3D"color:#00=
  0;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;fo=
  nt-size:16px;line-height:28px;direction:ltr;text-align:left">1:33 AM</td></=
  tr><tr><td class=3D"m_7164883217163996814Uber18_text_p1" align=3D"left" sty=
  le=3D"color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetic=
  a,sans-serif;font-size:16px;line-height:28px;direction:ltr;text-align:left"=
  >3509 Grapevine Mills Pkwy, Grapevine, TX 76051, US</td></tr></tbody></tabl=
  e></td></tr></tbody></table><table border=3D"0" cellpadding=3D"0" cellspaci=
  ng=3D"0" width=3D"initial" style=3D"border:none;border-collapse:collapse;bo=
  rder-spacing:0;table-layout:auto;width:100%"><tbody><tr><td width=3D"4" sty=
  le=3D"width:4px;font-size:1px;line-height:1px" valign=3D"top"><img src=3D"h=
  ttps://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/receipt_18_squa=
  re_top_fill_left.png" width=3D"4" height=3D"17" border=3D"0" style=3D"clear=
  :both;display:block;height:17px;max-width:100%;outline:none;text-decoration=
  :none;width:4px"></td><td style=3D"font-size:1px;line-height:1px;width:1px;=
  background-color:#fff" valign=3D"top"><img src=3D"https://d1a3f4spazzrp4.cl=
  oudfront.net/emails/2017/01/receipt_18_square_btm_fill_middle.png" width=3D=
  "1" height=3D"20" border=3D"0" style=3D"clear:both;display:block;height:20p=
  x;max-width:100%;outline:none;text-decoration:none;width:1px"></td><td widt=
  h=3D"3" style=3D"width:3px;font-size:1px;line-height:1px" valign=3D"top"><i=
  mg src=3D"https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/rece=
  ipt_18_square_top_fill_right.png" width=3D"3" height=3D"17" border=3D"0" st=
  yle=3D"clear:both;display:block;height:17px;max-width:100%;outline:none;tex=
  t-decoration:none;width:3px"></td><td class=3D"m_7164883217163996814Uber18_=
  text_p2" valign=3D"top" style=3D"color:#000;font-family:UberMoveText,open s=
  ans,helvetica neue,Helvetica,sans-serif;font-size:16px;line-height:16px;pad=
  ding-left:34px;direction:ltr;text-align:left"><table border=3D"0" cellpaddi=
  ng=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:no=
  ne;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td cla=
  ss=3D"m_7164883217163996814Uber18_text_p2" valign=3D"top" style=3D"color:#0=
  00;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;f=
  ont-size:16px;line-height:28px;direction:ltr;text-align:left">2:08 AM</td><=
  /tr><tr><td class=3D"m_7164883217163996814Uber18_text_p1" style=3D"color:#0=
  00;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;f=
  ont-size:16px;line-height:28px;direction:ltr;text-align:left">5200 Gadsden =
  Ave, Fort Worth, TX 76244, US</td></tr></tbody></table></td></tr></tbody></=
  table></td></tr></tbody></table></td></tr></tbody></table><table border=3D"=
  0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t6of12=
  " align=3D"left" style=3D"border:none;border-collapse:collapse;border-spaci=
  ng:0;max-width:336px;width:100%"><tbody><tr><td class=3D"m_7164883217163996=
  814desktopMap" style=3D"padding:20px 12px 30px;direction:ltr;text-align:lef=
  t"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" a=
  lign=3D"left" style=3D"border:none;border-collapse:collapse;border-spacing:=
  0;table-layout:fixed;width:100%"><tbody><tr><td style=3D"direction:ltr;text=
  -align:left"><div class=3D"m_7164883217163996814desktopMap"><img src=3D"htt=
  ps://static-maps.uber.com/map?width=3D312&amp;height=3D358&amp;marker=3Dlat=
  %3A32.97607%24lng%3A-97.03531%24icon%3Ahttps%3A%2F%2Fd1a3f4spazzrp4.cloudfr=
  ont.net%2Freceipt-new%2Forigin%402x.png&amp;marker=3Dlat%3A32.92216%24lng%3=
  A-97.27543%24icon%3Ahttps%3A%2F%2Fd1a3f4spazzrp4.cloudfront.net%2Freceipt-n=
  ew%2Fdestination%402x.png&amp;polyline=3Dcolor%3A0xFF000000%24width%3A4%24e=
  nc%3AksghEtegoQg%40oGfCwGtD%7C%40dKCk%40gNt%40%7BAnQnLjd%40da%40%7CLnGvJtCp=
  SrBjnBJdHh%40bF%60BfMxIbGnJ%60o%40pvA%60E%7EKxBjLv%40dSkFrnByDnRkFfK%7BD%60=
  Eg_%40t%5Bmi%40j%5EuHtHxIfJnBbTi%40xHcMjn%40y%40lIc%40zzBhDUiDh%40Fvs%40yAz=
  %5D%7EAxd%40mA%7C_Cz%40hMfDzMlWfd%40rClHfGxr%40s%40hoBr%40nu%40BtmBiCz_CTfI=
  xRjm%40BnB%7CIi%40vJhB%7CVJf%40r%40lF%7D%40HbCvCh%40QzK&amp;signature=3D0Su=
  2IUiGaW7tbWr1P0QLgsHG5-o=3D" width=3D"312" height=3D"" border=3D"0" style=
  =3D"clear:both;display:block;height:auto;max-height:358px;max-width:312px;o=
  utline:none;text-decoration:none;width:100%"></div></td></tr></tbody></tabl=
  e></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></t=
  able></td></tr></tbody></table></td></tr><tr><td style=3D"direction:ltr;tex=
  t-align:left"><div class=3D"m_7164883217163996814mobileMap" style=3D"displa=
  y:none;padding-bottom:30px"><img id=3D"m_7164883217163996814map_c5961b43-d9=
  be-401d-99fd-b4aaf2123180_wide" src=3D"https://static-maps.uber.com/map?wid=
  th=3D415&amp;height=3D182&amp;marker=3Dlat%3A32.97607%24lng%3A-97.03531%24i=
  con%3Ahttps%3A%2F%2Fd1a3f4spazzrp4.cloudfront.net%2Freceipt-new%2Forigin%40=
  2x.png&amp;marker=3Dlat%3A32.92216%24lng%3A-97.27543%24icon%3Ahttps%3A%2F%2=
  Fd1a3f4spazzrp4.cloudfront.net%2Freceipt-new%2Fdestination%402x.png&amp;pol=
  yline=3Dcolor%3A0xFF000000%24width%3A4%24enc%3AksghEtegoQg%40oGfCwGtD%7C%40=
  dKCk%40gNt%40%7BAnQnLjd%40da%40%7CLnGvJtCpSrBjnBJdHh%40bF%60BfMxIbGnJ%60o%4=
  0pvA%60E%7EKxBjLv%40dSkFrnByDnRkFfK%7BD%60Eg_%40t%5Bmi%40j%5EuHtHxIfJnBbTi%=
  40xHcMjn%40y%40lIc%40zzBhDUiDh%40Fvs%40yAz%5D%7EAxd%40mA%7C_Cz%40hMfDzMlWfd=
  %40rClHfGxr%40s%40hoBr%40nu%40BtmBiCz_CTfIxRjm%40BnB%7CIi%40vJhB%7CVJf%40r%=
  40lF%7D%40HbCvCh%40QzK&amp;signature=3Dp7s7mNLV5d1z0i_xoqGDZPE1Lys=3D" widt=
  h=3D"415" height=3D"auto" border=3D"0" style=3D"clear:both;display:block;he=
  ight:auto;max-width:100%;outline:none;text-decoration:none;width:100%"></di=
  v></td></tr></tbody></table><table width=3D"100%" border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;bord=
  er-spacing:0;width:100%"><tbody><tr><td align=3D"left" style=3D"background-=
  color:#276ef1;padding-top:15px;padding-bottom:15px;direction:ltr;text-align=
  :left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"bor=
  der:none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><=
  td style=3D"direction:ltr;text-align:left"><table border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t4of12" align=3D"lef=
  t" style=3D"border:none;border-collapse:collapse;border-spacing:0;max-width=
  :234px;width:100%"><tbody><tr><td style=3D"padding:10px 0;direction:ltr;tex=
  t-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=
  =3D"100%" align=3D"left" style=3D"border:none;border-collapse:collapse;bord=
  er-spacing:0;width:100%"><tbody><tr><td style=3D"padding-left:26px;padding-=
  right:12px;direction:ltr;text-align:left"><a class=3D"m_7164883217163996814=
  Uber18_text_p2" href=3D"https://email.uber.com/ls/click?upn=3D5TQkI4cGxaIGl=
  twScN15Uvsoaok85PvqCQ3QlNb6arQAsUWbSTnikFU6vUxSTt8vgm7RDagOhr04y1Xv44afdKpc=
  qaLlJ3iJEcDlphulsDM-3D0VIk_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3=
  X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwu=
  Jdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswep=
  NusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDc=
  KlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4=
  BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8=
  v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHl=
  RIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zY=
  qOFtHLDK-2Bdao6nml67HsKzWfe-2F1sQqFr7Ex-2B7Aqew6hR8-2BonNcDC1rjA1nY2SqAJvhP=
  jHtAK8nn1e4MdCp6S39Plf4YTfRKCmLEMlHbKV7tQr3UJzEtvOoWJIxNRQ2oKW7xaprEd1LHb5W=
  sEguRnb5qtUeG7kDEpaJQZbLjGK4BmmJfbd4dYFardcYl4v8Fi-2FlNRpxw-3D-3D" style=3D=
  "color:#fff;font-family:UberMoveText,open sans,helvetica neue,Helvetica,san=
  s-serif;font-size:14px;line-height:16px;padding:2px 0;text-decoration:none"=
   target=3D"_blank">Report lost item <span style=3D"padding-left:10px">=E2=
  =9D=AF</span></a></td><td width=3D"1" valign=3D"top" style=3D"direction:ltr=
  ;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" w=
  idth=3D"100%" style=3D"border:none;border-collapse:collapse;border-spacing:=
  0;width:100%"><tbody><tr><td class=3D"m_7164883217163996814bannerDivider" h=
  eight=3D"20" width=3D"1" style=3D"direction:ltr;text-align:left">=C2=A0</td=
  ></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><=
  table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"m_716488321=
  7163996814t4of12" align=3D"left" style=3D"border:none;border-collapse:colla=
  pse;border-spacing:0;max-width:234px;width:100%"><tbody><tr><td style=3D"pa=
  dding:10px 0;direction:ltr;text-align:left"><table border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none=
  ;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td style=
  =3D"padding-left:26px;padding-right:12px;direction:ltr;text-align:left"><di=
  v class=3D"m_7164883217163996814desktopContent"><a class=3D"m_7164883217163=
  996814Uber18_text_p2" href=3D"https://email.uber.com/ls/click?upn=3D5TQkI4c=
  GxaIGltwScN15UjnU1u7fTMJxOJIS1zPN1gI-3Dl50F_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2=
  EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B=
  7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU=
  8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8fa=
  xaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7=
  GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbU=
  IQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2=
  FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS=
  2-2BA-2Bml69mR0zYqOFtHLGLc2etvb6OLJoeo6Z8W1LbzYKy17iPTGTCG1OV1cqes5rjyLIAfQ=
  n-2BcXT05ETnDNAJzEPRkiieoPjcMh4qAA6QhlhwnrYG7BMaGvnr8bDo944Rk64uPX-2F7sfr84=
  -2BfAmZyMv1AieLnlu9VqT2eVQknrzt-2F8yohqF8VvGFgVs1BI7lY28aMVVEzkJKLepgIARUQ-=
  3D-3D" style=3D"color:#fff;font-family:UberMoveText,open sans,helvetica neu=
  e,Helvetica,sans-serif;font-size:14px;line-height:16px;padding:2px 0;text-d=
  ecoration:none" target=3D"_blank">Contact support<span style=3D"padding-lef=
  t:10px">=E2=9D=AF</span></a></div><div class=3D"m_7164883217163996814mobile=
  Content" style=3D"display:none"><a class=3D"m_7164883217163996814Uber18_tex=
  t_p2" href=3D"https://email.uber.com/ls/click?upn=3DF0pXumfOS4MEaguoriMkMI4=
  KWhkCtt-2Br91wl3zOGbT5T7I5uVwV8wcbpBhIDvrgMYDKj_jO-2BLgV6xdFAPatgFHv7H3SUSL=
  -2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIo=
  H73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBW=
  FtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1=
  b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1H=
  YMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2F=
  bXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6=
  LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs=
  9RSS2-2BA-2Bml69mR0zYqOFtHLESh7NkXKpCGATnmKl8XBPHJjRkUzha5tzP68GKRAsHHYb0UG=
  3m-2BXPGq53AFW2rQR-2B70b1ymmRMNGWGUQGYcWVGqXe8Oj3JKvw08CeSgFn4iUAyB9RzkOAuz=
  wOQlzJ-2B1zCcoTHZ3UDQGJP6p6q1ZTVVgHOKpzIhH6TqRlzSvQ-2BdRfprdHb4E6bPLOE22LBX=
  GzA-3D-3D" style=3D"color:#fff;font-family:UberMoveText,open sans,helvetica=
   neue,Helvetica,sans-serif;font-size:14px;line-height:16px;padding:2px 0;te=
  xt-decoration:none" target=3D"_blank">Contact support <span style=3D"paddin=
  g-left:10px">=E2=9D=AF</span></a></div></td><td width=3D"1" valign=3D"top" =
  style=3D"direction:ltr;text-align:left"><table border=3D"0" cellpadding=3D"=
  0" cellspacing=3D"0" width=3D"100%" style=3D"border:none;border-collapse:co=
  llapse;border-spacing:0;width:100%"><tbody><tr><td class=3D"m_7164883217163=
  996814bannerDivider" height=3D"20" width=3D"1" style=3D"direction:ltr;text-=
  align:left">=C2=A0</td></tr></tbody></table></td></tr></tbody></table></td>=
  </tr></tbody></table><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0=
  " class=3D"m_7164883217163996814t4of12" align=3D"left" style=3D"border:none=
  ;border-collapse:collapse;border-spacing:0;max-width:232px;width:100%"><tbo=
  dy><tr><td style=3D"padding:10px 0;direction:ltr;text-align:left"><table bo=
  rder=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" align=3D"left=
  " style=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%=
  "><tbody><tr><td style=3D"padding-left:26px;padding-right:12px;direction:lt=
  r;text-align:left"><a class=3D"m_7164883217163996814Uber18_text_p2" href=3D=
  "https://email.uber.com/ls/click?upn=3DspA0-2FY-2B4siX2BcQou8-2F48-2FCuAvuo=
  JdGqwWnZ4u-2BoGRshoZOO-2FR78Vytc-2FQoAWi931WPp_jO-2BLgV6xdFAPatgFHv7H3SUSL-=
  2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH=
  73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWF=
  tEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b=
  8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HY=
  MZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2Fb=
  XbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6L=
  L-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9=
  RSS2-2BA-2Bml69mR0zYqOFtHLJYBn-2Fi5nRTxMCy4QH8z9JrBXqRphyBm0mkF9CKMtJr6N0jP=
  XyPkZYLfiOqLHT1AuwpNluajwh8DevhOUoLsP0fjwd4zvUggQDFMZ6r02WtLT8xnqhbN32OYtQL=
  SI66ofHQLGGRkI3G9Cj1ihFx-2F4YOSWUwaKkNDi-2Bg0x2iXMKFIRDbIz555ud1-2FvKNbq9-2=
  B35g-3D-3D" style=3D"color:#fff;font-family:UberMoveText,open sans,helvetic=
  a neue,Helvetica,sans-serif;font-size:14px;line-height:16px;padding:2px 0;t=
  ext-decoration:none" target=3D"_blank">My trips <span style=3D"padding-left=
  :10px">=E2=9D=AF</span></a></td><td width=3D"1" valign=3D"top" style=3D"dir=
  ection:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0" cellspaci=
  ng=3D"0" width=3D"100%" style=3D"border:none;border-collapse:collapse;borde=
  r-spacing:0;width:100%"><tbody><tr><td height=3D"20" width=3D"1" style=3D"d=
  irection:ltr;text-align:left">=C2=A0</td></tr></tbody></table></td></tr></t=
  body></table></td></tr></tbody></table></td></tr></tbody></table></td></tr>=
  </tbody><tbody></tbody></table><table width=3D"100%" border=3D"0" cellpaddi=
  ng=3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;bo=
  rder-spacing:0;width:100%"><tbody><tr><td align=3D"left" style=3D"backgroun=
  d-color:#000"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=
  =3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"><tbod=
  y><tr><td align=3D"center"><table width=3D"100%" border=3D"0" cellpadding=
  =3D"0" cellspacing=3D"0" style=3D"border:none;border-collapse:collapse;bord=
  er-spacing:0;max-width:700px;width:100%"><tbody><tr><td style=3D"padding:0 =
  26px"><table class=3D"m_7164883217163996814receipt_body" width=3D"100%" bor=
  der=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-c=
  ollapse:collapse;border-spacing:0;table-layout:fixed;width:100%"><tbody><tr=
  ><td style=3D"font-size:0;line-height:0;padding-top:20px">=C2=A0</td></tr><=
  tr><td><table width=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=3D"=
  0" style=3D"border:none;border-collapse:collapse;border-spacing:0;width:100=
  %"><tbody><tr><td align=3D"left"><table border=3D"0" cellpadding=3D"0" cell=
  spacing=3D"0" align=3D"left" style=3D"border:none;border-collapse:collapse;=
  border-spacing:0;max-width:335px;table-layout:fixed;width:100%"><tbody><tr>=
  <td style=3D"padding-top:40px"><table border=3D"0" cellpadding=3D"0" cellsp=
  acing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;border-colla=
  pse:collapse;border-spacing:0;table-layout:fixed;width:100%"><tbody><tr><td=
   align=3D"left"><img src=3D"https://d1a3f4spazzrp4.cloudfront.net/receipt_v=
  3/Uber_Logo_White_RGB_138x48.png" width=3D"69" height=3D"24" style=3D"borde=
  r:none;clear:both;display:block;max-width:100%;outline:none;text-decoration=
  :none;width:auto" alt=3D""></td></tr></tbody></table></td></tr></tbody></ta=
  ble></td></tr></tbody></table></td></tr><tr><td style=3D"padding:40px 0 0">=
  <table width=3D"100%" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" styl=
  e=3D"border:none;border-collapse:collapse;border-spacing:0;width:100%"><tbo=
  dy><tr><td height=3D"1" style=3D"font-size:0;line-height:0;background:#333"=
  >=C2=A0</td></tr></tbody></table></td></tr><tr><td><table width=3D"100%" bo=
  rder=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;border-=
  collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td style=3D"vert=
  ical-align:top" valign=3D"top"><table border=3D"0" cellpadding=3D"0" cellsp=
  acing=3D"0" align=3D"left" style=3D"border:none;border-collapse:collapse;bo=
  rder-spacing:0;max-width:335px;table-layout:fixed;width:100%"><tbody><tr><t=
  d style=3D"padding-top:30px;vertical-align:top" valign=3D"top" align=3D"lef=
  t"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" a=
  lign=3D"left" style=3D"border:none;border-collapse:collapse;border-spacing:=
  0;table-layout:fixed;width:100%"><tbody><tr><td style=3D"color:#fff;font-fa=
  mily:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:1=
  2px;line-height:26px" align=3D"left"><a href=3D"https://email.uber.com/ls/c=
  lick?upn=3D5TQkI4cGxaIGltwScN15UiEU1Z05tLORYDhCMvHDxMXp1-2FGrvQPqpo9EFNFs3m=
  qmwnK9G-2F3FherPjzsICj7yM-2FK-2FJYue6uKR2EHeIe26RLwpFTiSq-2BB-2FMOIwXA4MEf4=
  KzHSrwM9QQbMHeXFgqFXItep-2Bp1Kf9guqlEKa1wFayRA3nSyhHdpw0M5nDUB4Sy-2FJsESM7Z=
  faBkdKepvt8RTcsw-3D-3DBlfv_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3=
  X-2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwu=
  Jdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswep=
  NusbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDc=
  KlYPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4=
  BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8=
  v0djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHl=
  RIcXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zY=
  qOFtHLI93b-2FjlKp0K-2FPhsE7HwgKu5E1E1zRxE0aqfhy3flGJly0HRgauoku2hhxM74PW7aW=
  m5LMFJ9YtSXsSAFpeVx2RcHVf-2B6ap5kkYzzwt7iDL5xpSUJEIOi-2FN6nZbDcHPii5Th8c0OT=
  xCpONd3P75ehJj-2B6Eq-2BrHTERuIkUkpnypNoBNqSvOFMe9Vjmq9pan2YDw-3D-3D" style=
  =3D"color:#fff;text-decoration:none" target=3D"_blank">Forgot password</a><=
  /td></tr><tr><td style=3D"color:#9d9da3;font-family:UberMoveText,open sans,=
  helvetica neue,Helvetica,sans-serif;font-size:12px;line-height:26px;padding=
  -top:6px" align=3D"left"><a href=3D"https://email.uber.com/ls/click?upn=3DI=
  b78WjkFQ66GYzavQJcfTaUW2mLjCZlesuzr-2FyzEQzDKq5PxwjJLnlhd3kWpjkC8yEDo_jO-2B=
  LgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-2BFu4RV8A17qEPxoxgnKTfH6Odlkhc=
  G3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJdz2MnDYpcVWpwEgIfJBcvj6NsEsFBjv=
  rpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNusbtsiX6RZNfV-2FgGd-2B7-2FISBSy=
  w-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKlYPzIonJ-2F3dwDmToKwOQrOU2YnzTA=
  AnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4BoBhYuCDGMPBsGMHU1xCTj3Fx07PvYHd=
  iqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0djFasNJEkDrbXsqjDkhX3ftTvVJJrV=
  UiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRIcXxz-2FZcGyaDTclwIKFKZIxxFSVWh=
  hY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqOFtHLCsaadoF7HO5vW2NXR1IngBuf9S=
  p9RgYMNSbBdFplRXaPt-2F3VojpK-2Fk9C3HQpsBa9VAP3-2F6XzjKbbiIpOI0JCIeFQHlesxhI=
  tG2B7N67C6ZPfIBvLYp9aVcPmepvUHQf7PJFhnJQ0soob6omfYSdPzQ9WST69cMYyePFN1rlwX5=
  k4kuIS10nDfOyKiGNmTMjiQ-3D-3D" style=3D"color:#fff;text-decoration:none" ta=
  rget=3D"_blank">Privacy</a></td></tr><tr><td style=3D"color:#9d9da3;font-fa=
  mily:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:1=
  2px;line-height:26px;padding-top:6px" align=3D"left"><a href=3D"https://ema=
  il.uber.com/ls/click?upn=3DIb78WjkFQ66GYzavQJcfTaUW2mLjCZlesuzr-2FyzEQzD9L-=
  2F1tKRCOuyZn2F4t4pFGPcAt_jO-2BLgV6xdFAPatgFHv7H3SUSL-2F2EfNwgxd1-2FGARCe3X-=
  2BFu4RV8A17qEPxoxgnKTfH6OdlkhcG3fIw-2BRro38t8QF5ngIoH73B7iKS2uBbgolFInbwuJd=
  z2MnDYpcVWpwEgIfJBcvj6NsEsFBjvrpC-2FBMkbNepV7GjD1eBWFtEU8-2BNb5LmCeoCswepNu=
  sbtsiX6RZNfV-2FgGd-2B7-2FISBSyw-2F-2F-2Fh9TmQxzovTF1b8faxaoJ4EHjlUaXRRFDcKl=
  YPzIonJ-2F3dwDmToKwOQrOU2YnzTAAnYiLQhYYR23GyK1zb0j1HYMZ7GtpICpiDuF71FZqq4Bo=
  BhYuCDGMPBsGMHU1xCTj3Fx07PvYHdiqK35b-2B7p4sj2Cqa0-2FbXbUIQv-2Bj4DPeJInOA8v0=
  djFasNJEkDrbXsqjDkhX3ftTvVJJrVUiM9UWRNVSOOltmj-2FfR6LL-2FaNX3y4SX3NXD0dHlRI=
  cXxz-2FZcGyaDTclwIKFKZIxxFSVWhhY93wuyhcp-2BoTZC9Tvvs9RSS2-2BA-2Bml69mR0zYqO=
  FtHLLe9Q-2FWox5Lucx5RUuiQDt9I-2Fy4zhKIVEiwyTUVaigo15bzh-2B-2BYclb4dlLL0cVy0=
  1kOEOyGcinq7x71mxUD1Xz6M5qZ4SY-2Bdv0kHN5jS2OomdO7udKnXmB1CkqD2zGJkO1QP9HeyS=
  LJQD40kllMYL2l9aocB9OcQfe9mAjYLrqDTAoGkiniatLVg2EG7oFBUPw-3D-3D" style=3D"c=
  olor:#fff;text-decoration:none" target=3D"_blank">Terms</a></td></tr></tbod=
  y></table></td></tr></tbody></table><table border=3D"0" cellpadding=3D"0" c=
  ellspacing=3D"0" align=3D"left" style=3D"border:none;border-collapse:collap=
  se;border-spacing:0;max-width:313px;table-layout:fixed;width:100%"><tbody><=
  tr><td><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100=
  %" align=3D"left" style=3D"border:none;border-collapse:collapse;border-spac=
  ing:0;width:100%"><tbody><tr><td align=3D"left"><table border=3D"0" cellpad=
  ding=3D"0" cellspacing=3D"0" align=3D"left" style=3D"border:none;border-col=
  lapse:collapse;border-spacing:0;max-width:195px;table-layout:fixed;width:10=
  0%"><tbody><tr><td style=3D"color:#9d9da3;font-family:UberMoveText,open san=
  s,helvetica neue,Helvetica,sans-serif;font-size:12px;line-height:18px;paddi=
  ng-right:10px;padding-top:30px" align=3D"left">Uber Technologies<br>1725 3r=
  d Street,<br>San Francisco,<br>California<br>94158</td></tr></tbody></table=
  ></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></ta=
  ble></td></tr><tr><td></td></tr><tr><td style=3D"font-size:0;line-height:0;=
  padding-top:60px">=C2=A0</td></tr></tbody></table></td></tr></tbody></table=
  ></td></tr></tbody></table></td></tr></tbody></table><table width=3D"100%" =
  border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border:none;borde=
  r-collapse:collapse;border-spacing:0;width:100%"><tbody><tr><td align=3D"le=
  ft" style=3D"background-color:#f1f1f1;padding:0 14px;direction:ltr;text-ali=
  gn:left"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"b=
  order:none;border-collapse:collapse;border-spacing:0;width:100%"><tbody><tr=
  ><td style=3D"direction:ltr;text-align:left"><table border=3D"0" cellpaddin=
  g=3D"0" cellspacing=3D"0" class=3D"m_7164883217163996814t11of12" align=3D"l=
  eft" style=3D"border:none;border-collapse:collapse;border-spacing:0;max-wid=
  th:616px;width:100%"><tbody><tr><td style=3D"padding-left:12px;padding-righ=
  t:12px;direction:ltr;text-align:left"><table border=3D"0" cellpadding=3D"0"=
   cellspacing=3D"0" width=3D"100%" align=3D"left" style=3D"border:none;borde=
  r-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%"><tbody>=
  </tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></=
  tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td=
  ></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><=
  /td></tr></tbody></table></td></tr></tbody></table><img src=3D"https://emai=
  l.uber.com/wf/open?upn=3D1sSnVAdq-2BqA7KjJBHUeaguktmJuITgsJitUXIBM-2Fmudsot=
  w2i5pHop0bU-2BVxHNHHpxuaa1tX3gQwN341FDOPT9Gfaw4WcrMwKpu8Cg5QcVb8bUvtBmsPbg-=
  2F9eTLrCRy6cF0GpX0VqgdWM4aoadSYkgmJYtMl9YAsjFHwJMueDEIXQv6qg2nlYSdrlJwdYvip=
  9S33wgypf2YcyMvRnPU0FtsUS22ck-2FlFNylUtzKtBAI-2B3QR3Pv9Qfa3fFtp7U6HjZMH52K8=
  b0SmtOtVl8W1LsmefxmcyEMKAKxaTl7eyzS-2BvJjnHShbS12jAmopwxYf4Hb-2FqI6m-2BYFry=
  l3DxrzpPigaqHLHQU-2FczgldkeS669URa-2FfkoSJQsF-2FvXnBYjS7I6cQ73sYa4pu89beDwW=
  dLP3XxQTGz6fKXVSfuWW8SpIOT3VbaWp0eFOIrunz7QHj0AQ1J-2B-2BdRLP7MKQPgJR45hnJFL=
  PJ6x2wJOf3siofr4Q4QbvKT8uyonzUaCnPyahaMyTWwC26ZJ3SC-2FnohnmSrrtwWuEIn9-2FlC=
  0mysfIUuL-2BqENKXNCa-2Bk-2F2EZFt5FieWgg2aZIgRMrmhZsKy57pLrtaVhXSOZH-2FT7riA=
  o5xd99DxtFiREiv8QJlqYqOnCQdYYfpgNgeXZ17AEvVK4-2FWT2tMxchVNUAEwkMyqFBVAKE-2F=
  eqRLYz40SYfnns2-2FVKFTXQBz2qy5B3TasivyS4WmNnENg-3D-3D" alt=3D"" width=3D"1"=
   height=3D"1" border=3D"0" style=3D"height:1px!important;width:1px!importan=
  t;border-width:0!important;margin-top:0!important;margin-bottom:0!important=
  ;margin-right:0!important;margin-left:0!important;padding-top:0!important;p=
  adding-bottom:0!important;padding-right:0!important;padding-left:0!importan=
  t"></div>
  </div></div></div>

  --0000000000006984ed06190d2b71--`,
  `Delivered-To: meenadevesh2003@gmail.com
  Received: by 2002:a9d:6553:0:b0:6f0:616f:e7d7 with SMTP id q19csp502127otl;
          Wed, 22 May 2024 09:11:29 -0700 (PDT)
  X-Received: by 2002:a05:6830:923:b0:6f0:9962:dfdb with SMTP id 46e09a7af769-6f666a9b24cmr3859175a34.15.1716394289294;
          Wed, 22 May 2024 09:11:29 -0700 (PDT)
  ARC-Seal: i=1; a=rsa-sha256; t=1716394289; cv=none;
          d=google.com; s=arc-20160816;
          b=ihI33eNAdJC7utB23QCwsv9dOQ57uesCIANJ9PAaLk1glls0UFDQpa9OLZdXSX8q4U
           Rnw1nv4Y84m2MPfvh7zy9NT33AK7j4m9irrpA1kyaG3NWyzGrXqyhmNgX5scBrh+lpGS
           bZlsESfkYEpY4qpP2xkrMiRqsERxOlMrCR/0ccG0fM5gNAOEvTvHGtijvlTVMJHvdhEy
           E+iYoySDYeWxqiZwmYBbD1Npi8oUylFtMy4ksy9CmOHRvQEoDoSNKHaijbNoMVLiVE19
           OKRN2gmsH998qQuiZCOkPb1wFLclycZSngVBgErG7h9bVEFiZFESetU9rgx/lq+fuvxE
           iY8Q==
  ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
          h=to:subject:message-id:date:from:in-reply-to:references:mime-version
           :dkim-signature;
          bh=HZy6VmW6a1P7/XSBTF035X/glh4Fcsnqjc7gYWvDp5Q=;
          fh=LN2tmi9762Hw3zRD/kOw0OoGrww8nLvhm5EGObXDtpw=;
          b=kFq8OwkUhV4Q904A/QeFGfBgTYFw3aIdHTSXQQz9xVJr96GC646LmDcqFaKXDLNYfQ
           SPgjJcpXb0FiWTCF6ryJ/s/jh83K0Vk8//wuJcsL7gM6DDrW4jn2Vbz8ZvzsGqDcMnFh
           hWfPT5q6+D2/zaHTO/8F0n+VuOk22jdzbVq3c46p4ASE8O8YVhirIhikos6uMvotpWsu
           iMaIjWcO0OH95usHnjCACldSJmMXlpuvX/Ba3kDEnHs50/L/KyhG4ncsD/fJ8sMJ43V7
           MFXTOErrJweTLqTcEDQUAIPGVcjSG1Yav0D3s5qXzlJNsPlcQSsxB/4tsvUDKKtBdw51
           dbKg==;
          dara=google.com
  ARC-Authentication-Results: i=1; mx.google.com;
         dkim=pass header.i=@gmail.com header.s=20230601 header.b="LTTS+HH/";
         spf=pass (google.com: domain of amanueltesfaye44@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amanueltesfaye44@gmail.com;
         dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com
  Return-Path: <amanueltesfaye44@gmail.com>
  Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])
          by mx.google.com with SMTPS id 46e09a7af769-6f1423a4d4asor3160099a34.6.2024.05.22.09.11.29
          for <meenadevesh2003@gmail.com>
          (Google Transport Security);
          Wed, 22 May 2024 09:11:29 -0700 (PDT)
  Received-SPF: pass (google.com: domain of amanueltesfaye44@gmail.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41;
  Authentication-Results: mx.google.com;
         dkim=pass header.i=@gmail.com header.s=20230601 header.b="LTTS+HH/";
         spf=pass (google.com: domain of amanueltesfaye44@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amanueltesfaye44@gmail.com;
         dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com
  DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
          d=gmail.com; s=20230601; t=1716394288; x=1716999088; dara=google.com;
          h=to:subject:message-id:date:from:in-reply-to:references:mime-version
           :from:to:cc:subject:date:message-id:reply-to;
          bh=HZy6VmW6a1P7/XSBTF035X/glh4Fcsnqjc7gYWvDp5Q=;
          b=LTTS+HH/ytKVAkudcaA8VG9rLYnLgcQ5iNJyH+ETCWN8O/5bekfqAcXgdLoldnRmiI
           Tz1u4yFXIihla0HOnwU8vmRjUAIJp6FaiucXduJdaSOs8UdDZJ1zAnA+CAzMUmJ4vH2S
           m/26w3f4jXDPzwbHZKBRuq3avdSwiBymI7n4Hw8lhO0KbVsvZvALiRG37/T5Aaxyi8Dk
           +OxAiuzw++d0G44IDwmnKlyQD9ehxanGtlbunCzQwo9olF1/jKKSTGvNwkFv0nv22ICO
           wAcCB7Re3OO07fv8wMq3QXLFG3Ku0COhMgJnn+zNFviMg0BaUuTLBfO7Uqt1pHdCdj0k
           2KkQ==
  X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
          d=1e100.net; s=20230601; t=1716394288; x=1716999088;
          h=to:subject:message-id:date:from:in-reply-to:references:mime-version
           :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;
          bh=HZy6VmW6a1P7/XSBTF035X/glh4Fcsnqjc7gYWvDp5Q=;
          b=BNjJY2hSzWUkJIUJtLSqjXaVyVKScYg6qRcdJRMprPtBw4pmrZ6cEC1QnEflLE+ruC
           ErMSSYQ7Hhsunw7EHK+q+yf7drD8rPq1nsFnOqZfz1O4ftHeF+aV8T1WFE3wrlD30cAr
           awHT/RXLkKlKyXONnkZLDii9mDwUL7PUAG6n/8PcS9QNp5BpelbutVDW4odPT5ZGBS+f
           63B3A/EmSvl53SWGzcaBBtNsI6NjKrU3oekCKEDreZnb8spvl3wwROL/MBIM6IIFgQco
           QLDzKTRhRp32yOrBH+ujf6mX5qJc7XapqvTFKFv2KUGH2yEsH2+W7klV6URzdsFfCSTs
           8zgw==
  X-Gm-Message-State: AOJu0Yw58EQNdZlDaxmW0LyP4dwpwgkp3RU8hpTQXpFwwsHtUOf3ibsE n5CQeq0sWKAFXlZDjpjkcttrrb3dBwgzgf7XgVuh4PAEXvemJ+1r9Rm+JQSRnI8DX1bKcBKAJ47 sp2Q9sVz8UGqTDIFSjJQl8RZdb9cKGfMGtzQ=
  X-Google-Smtp-Source: AGHT+IFabfK4OuB1PGMgF1SN3RflQIontBiysFvbmhoNhmIXlH6bNJApOIGaYNuOWZ61/LKeZ1GMuuR33V7lzWJApxQ=
  X-Received: by 2002:a05:6359:678a:b0:197:3d6f:ccf6 with SMTP id e5c5f4694b2df-19791ddc7e9mr263252855d.1.1716394288248; Wed, 22 May 2024 09:11:28 -0700 (PDT)
  MIME-Version: 1.0
  References: <20240421181629.c50fd9b1286f6730@lyftmail.com>
  In-Reply-To: <20240421181629.c50fd9b1286f6730@lyftmail.com>
  From: Amanuel Tesfaye <amanueltesfaye44@gmail.com>
  Date: Wed, 22 May 2024 11:11:17 -0500
  Message-ID: <CAOg8HWt4suGgd6_wPrxc64+npWQy-2oOoHO+Dj9A5DvP68Ce3A@mail.gmail.com>
  Subject: Fwd: Your ride with Luan on April 20
  To: "meenadevesh2003@gmail.com" <meenadevesh2003@gmail.com>
  Content-Type: multipart/alternative; boundary="000000000000d880ed06190d2f52"

  --000000000000d880ed06190d2f52
  Content-Type: text/plain; charset="UTF-8"
  Content-Transfer-Encoding: quoted-printable

  ---------- Forwarded message ---------
  From: Lyft Receipts <no-reply@lyftmail.com>
  Date: Sun, Apr 21, 2024 at 1:16=E2=80=AFPM
  Subject: Your ride with Luan on April 20
  To: <amanueltesfaye44@gmail.com>


  Thanks for riding with Luan!
   =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C =E2=80=
  =8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =
  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C =E2=80=8C =E2=80=8C =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C
  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C =E2=80=8C =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=
  =8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =
  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C
  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=
  =8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C =E2=80=8C =
  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C
  =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=
  =80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C  =E2=80=8C =E2=80=8C =E2=80=
  =8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C =E2=80=8C
  [image: lyft]
  APRIL 20, 2024 AT 12:34 PM
  Thanks for riding with Luan!
  100% of tips go to drivers. Add a tip
  <https://email.lyftmail.com/c/eJxMkE2L2zAQQH-NfHOQRp8--KCSurTN0k2yIc0pyNJo7=
  a6dTW0FN_vri7pQ9vZmeDCPCbWrAsMCa6YZ18C5qYqujlx7FCFozRhl3CuhW24A21Z5bYIv-hoo=
  CCqAMcMUVCsvaQxVy8CoqDSnRNDhHtPo-mHlX8diqLuUrjPhlkBDoHHev94uaZWlLOTVLXWEN5g=
  IX9uttdZ-efy0nLb7b5_H_u33BMv39c_dXb2ZpvyaNsfyGDcpHOPDPg0vnaKb04N5OZzuNNqn5Z=
  TsD7VbDhH9MDy11z26bSfLcV5-DW563NkDAcnXBNQF_-SL73kgc6DMiRKaZVk-BEpoXAipv_5DV=
  nEjhKyEZEwYpTkXRXbPI86ze8ZzH2qvaCUD-tKgjKVgmpZVULrkBgyioB60K6baje5ywyHhHN0d=
  hSCCPv9_XKqnPuB5Qo_9Nc15fse_AQAA___OCYi8>
  Lyft fare (18.87mi, 35m 13s) $24.27
  Texas Surcharge $0.72

  Apple Pay (Visa) * $24.99 *
  [image: Ride Map]
  Pickup   12:34 PM
    3650 Grapevine Mills Pkwy, Grapevine, TX
  Drop-off  1:09 PM
    11515 Maddie Ave, Keller, TX

  Make expensing business rides easy
  Enable business profile on Lyft to make expensing rides quick and easy.
  GET BUSINESS PROFILE
  <https://email.lyftmail.com/c/eJxMkM1u2zAQhJ-Gusngv6iDDixcFW0dNLZjuD4JFLWM1=
  FC2K1JQlacvmABBbruL2ZkP01Wm7AhkUJGCsIIypsqsr4hQLTdEFq0seSGZYVJJEKXjxmDuZDZU=
  FFOOOSVEEUnLjRXYdWVLqJJOFgwjjv3q4mgGv7G3MfNVH-M9IKYRrRGtjbW3-Ro3SZQE6TTHHrE=
  aImJbvdda62-PX5bL_vjj6zi8_p3o8nP7-7DKV1Xn3-PunJ_dLnZn93CM_qWXeHd5UC-ny4qdfl=
  ouUf-Sh-XkwHr_1N6PYPa9yMew_PFmejzoE6KCbRGVV_iXEt_xqEiAIiEKWi_L8glQ0Lqdw3CFE=
  PL7dHODh7eHeo5jE27zZOHNcxo6aCawMNxjA6mBLJk0I4RgnqEZuspKXIoObK5AuJyTAudlJ4uc=
  KaoAOLa0MNlUmdFcZ_ARgjMrcI44fv5oNFafg0La38f_AQAA__8W25VG>


  Tip driver
  <https://email.lyftmail.com/c/eJxMkE2L2zAQQH-NfHOQRp8--KCSurTN0k2yIc0pyNJo7=
  a6dTW0FN_vri7pQ9vZmeDCPCbWrAsMCa6YZ18C5qYqujlx7FCFozRhl3CuhW24A21Z5bYIv-hoo=
  CCqAMcMUVCsvaQxVy8CoqDSnRNDhHtPo-mHlX8diqLuUrjPhlkBDoHHev94uaZWlLOTVLXWEN5g=
  IX9uttdZ-efy0nLb7b5_H_u33BMv39c_dXb2ZpvyaNsfyGDcpHOPDPg0vnaKb04N5OZzuNNqn5Z=
  TsD7VbDhH9MDy11z26bSfLcV5-DW563NkDAcnXBNQF_-SL73kgc6DMiRKaZVk-BEpoXAipv_5DV=
  nEjhKyEZEwYpTkXRXbPI86ze8ZzH2qvaCUD-tKgjKVgmpZVULrkBgyioB60K6baje5ywyHhHN0d=
  hSCCPv9_XKqnPuB5Qo_9Nc15fse_AQAA___OCYi8>


  Find lost item
  <https://email.lyftmail.com/c/eJxMjsuK6zAYg5_G2aX8N98WXhw45DWKY_9uA8m0NC6hb=
  z-EgWF2n5CEVFOOFXXQhB7ZE3OIwz1VJEuQ7VwBrC8zt6a5-OzIOQdzHJZEQAJCiAEdxUux0Gqc=
  kYJrzjMYgfXT-paX9VIe27Cme-_P3fA_Q5Oh6TiOyxk4TUPT-tj70vVEjBxEbBSLKMF5ZjE8vft=
  m-P9rqXp9adHl2Yezft103_NNr0tNxUG0VcsY1LZR0MMYq_MjBwqqAoV8Hl4pb_nrrWvXveWPih=
  iB2-_Nnv5O7Kf-we8AAAD__51tWqA>


  Request review
  <https://email.lyftmail.com/c/eJxMkM1u2zAQhJ9Guskgl_8HHVi4Kto6aGzHcH0yaHIZq=
  ZEcV6KhOk9fMAEC32YXszMfNtTOBIol1lRRpoAxbcq2PgWvPaJUTGttThwkeC6IEYJ7qqQuuxoI=
  cMKBUk0lmIUXJAZzoqBllIqRgpP-FtPgun7hX4eyr9uULlPBbAFNAY3z_vV6Totsyoa8uqa2YA2=
  mgi3t2lprvz1-mQ_r7Y-vQ_f2d4T55_L35ibfdFN9T6t9tY-rFPbxYZv6l1aS1eFBv-wONxLt03=
  xI9pfczLuIvu-fTpctunUrqmGa__RufNzYXQGCLQuQZ_yXGz_wQGRAkREFNPM83wEKaMYu4PSuq=
  GGac2G4oJRrqRjj-bi5puE9ODuPI3rsLqnMGccBp8k947ELtZfEiIC-0ihixakilQlSVUyDRuTE=
  g3LlWLvBna_YJ5yiuyHnBSfPnw9N9X3FlOcP-T8AAP__2PCQAg>


  To protect against unauthorized behavior, you may see an authorization hold
  <https://email.lyftmail.com/c/eJw8jUtqwzAUAE8j7RzeT7-FFt14WegJjCo9JQa7CbZay=
  O1LKHQ3AwPTckkN1WrGgByIOSZ7y05iSJU7O2y1JMdFqnIipzEQ-G7XTEACQogRPaVLddBb-kSK=
  vvvAYAS2Zx97WbdLve92y7cxHobfDM2G5q2Py7gbmvH9-Pghsq942fU8y1WXteXqIbmmdYrq-iQ=
  YYErNh4kjRVWBSqHYI5e9fH3rNvTs5akiRuD6_xz5WJsuh1ZdH-N8-R_-BgAA__8ipkn8>
  on your bank statement. This is to verify your payment method and will not
  be charged.


  Help Center
  <https://email.lyftmail.com/c/eJw8jb1qxDAQhJ_G7nzsrv4LFWnuNYxOuzoL5MRYSuG3D=
  -Yg1cwwH3wcU2CUWSI6VI6U8mHeojPBmYJ3ALIntC8OGawSKRx8mWskIA2aED1aCo9soHB4IXlb=
  rFMwaWhXGXuq7ZF_9rnFbYyjT-proudEz03a8biJz3uVse7Se3rLWjlmC8Gw5MWLKYtGB0tg6xb=
  lyYtoyOTSfMa0p-9faUN6SZdoPWl4_xtHPCvLekqWeox-70_9CwAA__8Ol0px>
  Receipt #1938445945114867334

  We never share your address with your driver after a ride.
  Learn more
  <https://email.lyftmail.com/c/eJw8jc9qxCAQh59Gb1l0NI4ePPSS1whTZ9wVknaJlpC3L=
  6HQ2-_PBx9nSmxFS7ZoHYJzMelXDiFZ5hLZeYqCSZCCRUlEhqsg6JbBgDcerI02QHqU2VROnxZi=
  qAGdUd5sVx07te1Rvne95dcY767ch4JFwXKe5-MG7lPB0qnKuPS9rLv0Tk9ZG-cSTJpZyhRlrpO=
  3aKbEAScXIYp4UwBJH5l2-vqRbUivdIn3ypvnv3nko7GshxRp79Hv_hd_AwAA__8kFk4L>
  about our commitment to safety.

  =C2=A9 OpenStreetMap
  <https://email.lyftmail.com/c/eJw8js2qriAUQJ9GZ8V2a_4MHNxJrxGm2xLqK9RL9PaHj=
  wNnttZgwUo-uCSIkxdGSINSWsd374yWUuW0ihWiDtIZiAZXUjIkRUC8eARUoFAIKzS6MU6Qk1sF=
  Wp21kcAUHG_uZyjHGK-TH37v_W5M_mM4M5yf5xmvmz6tV6J-hnu86sZwjtf91rLtnX_z5aTWwkZ=
  LST5qcFOiOFia8qCEgcElbQZp0RIpiGgCrz6c4fOfjk4th5eUYgq2v4vua0m0VIpU7t6-_os_AQ=
  AA__8ocFLd>
  amanueltesfaye44@gmail.com Lyft 2024-04-20 USD 24.99 Taxi
  1938445945114867334 0.00

  =C2=A9 2024 Lyft, Inc.
  548 Market St., P.O. Box 68514
  San Francisco, CA 94104
  CPUC ID No. TCP0032513 - P
  Work at Lyft
  <https://email.lyftmail.com/c/eJw8jsGK9CAQhJ9Gbwlqd7Q9ePjhJ68RjLYzgWRnUEOYt=
  1_CLnuroj6oL4fos2bJQTsNzgCQl8-gENaYChEgkM8IQNNaFNkVddYW5BaMMqjQaE3aGj-mSZXs=
  V23IFutACVT7p_QjbvuYXofcw7P3dxPwT5hZmPm6rvEG7lGYOcXKXJuA-ezH0l5nTSzgf-XE27v=
  Lm1wObi0-eNlySFb5KXMaiKcyoHZq8Nm6AcgQM6pkXJQ1xCN-nbx3biV-GFGgevwZ9VC3zMvvRb=
  v7T_wOAAD__0N9Vc8>
  Become a Driver
  <https://email.lyftmail.com/c/eJw8jt1qxCAUhJ9G71z0-H_hRaHkNYLrOW6EpLtE07BvX=
  0JL72bmG5jBlCMq4pSUV9qD1iHyJWG4O4wuGqi60N3qjLbIWAuidGSBtwQSjDSgVFAO4q1YWTHe=
  FQRXndeSGbm-69hyW2_lufE1LWO8OtMfDCYG03met6twQQYT7u2bxNnGIq6U6ekY29yfx16I6c-=
  dCrXX4BebN-o9P2humIqT0SIVEchWYZSXIqLzQgcIREYW8JnvKW_566B1UK_5TcYwIx__z0baG9=
  L8N9Ev_yt_AgAA__8_iFn_>

  --000000000000d880ed06190d2f52
  Content-Type: text/html; charset="UTF-8"
  Content-Transfer-Encoding: quoted-printable

  <div dir=3D"ltr"><br><br><div class=3D"gmail_quote"><div dir=3D"ltr" class=
  =3D"gmail_attr">---------- Forwarded message ---------<br>From: <strong cla=
  ss=3D"gmail_sendername" dir=3D"auto">Lyft Receipts</strong> <span dir=3D"au=
  to">&lt;<a href=3D"mailto:no-reply@lyftmail.com">no-reply@lyftmail.com</a>&=
  gt;</span><br>Date: Sun, Apr 21, 2024 at 1:16=E2=80=AFPM<br>Subject: Your r=
  ide with Luan on April 20<br>To:  &lt;<a href=3D"mailto:amanueltesfaye44@gm=
  ail.com">amanueltesfaye44@gmail.com</a>&gt;<br></div><br><br><div class=3D"=
  msg9001294304741892183">
  <u></u>


     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
     =20
  =20

  <div width=3D"100%">
     =20
      <div style=3D"display:none;font-size:1px;color:#ededf0;line-height:1px;=
  max-height:0px;max-width:0px;opacity:0;overflow:hidden"> Thanks for riding =
  with <span class=3D"m_9001294304741892183break-on-desktop">Luan!</span> =C2=
  =A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=
  =A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=
  =A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=C2=A0=E2=80=8C=C2=A0=E2=80=
  =8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=
  =8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=
  =8C=C2=A0=E2=80=8C=C2=A0=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=
  =E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=
  =E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=
  =C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=
  =C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=
  =C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=C2=A0=E2=80=8C=C2=A0=E2=
  =80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
  =80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
  =80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
  =80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
  =80=8C=C2=A0=E2=80=8C=C2=A0=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=
  =A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=
  =A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=
  =A0=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=
  =8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=
  =8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=C2=A0=E2=80=8C=C2=A0=
  =E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=
  =E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=
  =E2=80=8C=C2=A0=E2=80=8C=C2=A0=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=
  =C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=
  =C2=A0=E2=80=8C=C2=A0=E2=80=8C</div>=20
     =20
     =20
      <table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" =
  align=3D"center" bgcolor=3D"#FDFDFB" style=3D"background-color:#fdfdfb">
          <tbody><tr>
              <td width=3D"100%" align=3D"center">
                  <table class=3D"m_9001294304741892183wrapto600px" width=3D"=
  600" align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" bgco=
  lor=3D"#ffffff" style=3D"background-color:#ffffff;border:1px solid #ededf1"=
  >
                      <tbody><tr>
                          <td>
                              <table class=3D"m_9001294304741892183wrapto600p=
  x" width=3D"600" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" bgcolor=
  =3D"#ffffff" style=3D"background-color:#ffffff;min-width:100%">
                                  <tbody><tr>
                                      <td align=3D"left" valign=3D"top">
                                         =20
                                          <table class=3D"m_90012943047418921=
  83wrapto600px" width=3D"600" align=3D"left" border=3D"0" cellpadding=3D"0" =
  cellspacing=3D"0" bgcolor=3D"#ffffff" style=3D"background-color:#ffffff">
                                              <tbody><tr>
                                                  <td> <table width=3D"100%" =
  cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table> </td>
                                              </tr>
                                             =20
                                                 =20
                                                  <tr>
                                                      <td width=3D"600" style=
  =3D"padding-left:4%;padding-right:4%;text-align:left" align=3D"left"> <img =
  height=3D"35" src=3D"https://s3.amazonaws.com/growth.lyft.com/2018_Brand_Re=
  fresh/Logo/new-palete/Lyft-Logo_Pink_FF00BF.png" style=3D"display:block" al=
  t=3D"lyft" border=3D"0" width=3D"50">
                                                      </td>
                                                  </tr>
                                                 =20
                                             =20
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td> <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"15" style=3D"height:15px"></td>
          </tr>
      </tbody></table> </td>
                                  </tr>
                              </tbody></table>
                              <table class=3D"m_9001294304741892183wrapto600p=
  x" width=3D"600" align=3D"center" border=3D"0" cellpadding=3D"0" cellspacin=
  g=3D"0" bgcolor=3D"#ffffff" style=3D"background-color:#ffffff">
                                  <tbody><tr>
                                      <td style=3D"padding-left:4%;padding-ri=
  ght:4%">
                                         =20
                                         =20
                                      </td>
                                  </tr>
                              </tbody></table>
                             =20
                             =20
                             =20
                             =20
                              <table class=3D"m_9001294304741892183wrapto600p=
  x" width=3D"600" align=3D"center" border=3D"0" cellpadding=3D"0" cellspacin=
  g=3D"0" bgcolor=3D"#ffffff" style=3D"background-color:#ffffff"><tbody><tr>
                                      <td> <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table> </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table class=3D"m_90012943047418921=
  83wrapto600px" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"60=
  0" bgcolor=3D"#ffffff" style=3D"background-color:#ffffff">
                                              <tbody><tr>
                                                  <td>
                                                      <table width=3D"100%" c=
  ellspacing=3D"0" cellpadding=3D"0" align=3D"center">
                                                          <tbody><tr>
                                                              <td width=3D"10=
  0%" align=3D"left" style=3D"padding-left:4%" colspan=3D"2">
                                                                  <table bord=
  er=3D"0" width=3D"100%" cellspacing=3D"0" cellpadding=3D"0" align=3D"left">
                                                                      <tbody>=
  <tr>
                                                                          <td=
   align=3D"left" valign=3D"bottom" style=3D"font-size:12px;font-family:&#39;=
  LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;col=
  or:#11111f;line-height:15px;font-weight:bold"> <a style=3D"text-decoration:=
  none;color:#000001"><span style=3D"color:#000001;text-decoration:none">   A=
  PRIL 20, 2024 AT 12:34 PM  </span></a>
                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
  > <table width=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"8" style=3D"height:8px"></td>
          </tr>
      </tbody></table> </td>
                                                                      </tr>
                                                                  </tbody></t=
  able>
                                                              </td>
                                                          </tr>
                                              <tr>
                                                              <td width=3D"10=
  0%" align=3D"left" valign=3D"top" style=3D"padding-left:4%;padding-right:4%=
  ;width:100%"> <span style=3D"color:#11111f;font-size:30px;line-height:30px;=
  font-family:&#39;LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Ari=
  al,sans-serif;font-weight:bold"> Thanks for riding with Luan!</span>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr><tr>
                                                  <td> <table width=3D"100%" =
  cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"5" style=3D"height:5px"></td>
          </tr>
      </tbody></table> </td>
                                              </tr>
                                              <tr>
                                                 <td align=3D"left" style=3D"=
  padding-left:4%;padding-right:4%;color:#000001;font-family:&#39;LyftProUI-R=
  egular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:1=
  6px;line-height:20px">
                                                      100% of tips go to driv=
  ers. <a href=3D"https://email.lyftmail.com/c/eJxMkE2L2zAQQH-NfHOQRp8--KCSur=
  TN0k2yIc0pyNJo7a6dTW0FN_vri7pQ9vZmeDCPCbWrAsMCa6YZ18C5qYqujlx7FCFozRhl3CuhW=
  24A21Z5bYIv-hooCCqAMcMUVCsvaQxVy8CoqDSnRNDhHtPo-mHlX8diqLuUrjPhlkBDoHHev94u=
  aZWlLOTVLXWEN5gIX9uttdZ-efy0nLb7b5_H_u33BMv39c_dXb2ZpvyaNsfyGDcpHOPDPg0vnaK=
  b04N5OZzuNNqn5ZTsD7VbDhH9MDy11z26bSfLcV5-DW563NkDAcnXBNQF_-SL73kgc6DMiRKaZV=
  k-BEpoXAipv_5DVnEjhKyEZEwYpTkXRXbPI86ze8ZzH2qvaCUD-tKgjKVgmpZVULrkBgyioB60K=
  6baje5ywyHhHN0dhSCCPv9_XKqnPuB5Qo_9Nc15fse_AQAA___OCYi8" style=3D"color:#ff=
  00bf;text-decoration:underline" target=3D"_blank">Add a tip</a>
                                                  </td>
                                              </tr><tr>
                                                  <td> <table width=3D"100%" =
  cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table> </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                   <tr>
                                      <td>
                                          <table width=3D"100%" cellspacing=
  =3D"0" cellpadding=3D"0" align=3D"center">
                                              <tbody><tr>
                                                  <td>
                                                     =20
                                                     =20
                                                      <table width=3D"100%" c=
  ellspacing=3D"0" cellpadding=3D"0" class=3D"m_9001294304741892183mobileminw=
  idth100" align=3D"center" style=3D"font-size:17px;color:#11111f;font-family=
  :&#39;LyftProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-=
  serif;line-height:22px;min-width:100%">
                                                          <tbody><tr>
                                                              <td>
                                                                  <table widt=
  h=3D"100%" cellspacing=3D"0" cellpadding=3D"0" class=3D"m_90012943047418921=
  83mobileminwidth100" align=3D"center" style=3D"min-width:100%"><tbody><tr>
                                                                          <td=
   class=3D"m_9001294304741892183mobileBodySmall" align=3D"left" style=3D"fon=
  t-size:17px;color:#11111f;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helv=
  etica Neue&#39;,Helvetica,Arial,sans-serif;line-height:22px;padding-left:4%=
  ">Lyft fare (18.87mi, 35m 13s)
                                                                          </t=
  d>
                                                                          <td=
   class=3D"m_9001294304741892183mobileBodySmall" align=3D"right" style=3D"fo=
  nt-size:17px;color:#11111f;font-family:&#39;LyftProUI-Regular&#39;,&#39;Hel=
  vetica Neue&#39;,Helvetica,Arial,sans-serif;line-height:22px;padding-right:=
  4%" width=3D"30%"> $24.27
                                                                          </t=
  d>
                                                                      </tr><t=
  r>
                                                                          <td=
   class=3D"m_9001294304741892183mobileBodySmall" align=3D"left" style=3D"fon=
  t-size:17px;color:#11111f;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helv=
  etica Neue&#39;,Helvetica,Arial,sans-serif;line-height:22px;padding-left:4%=
  ">Texas Surcharge=20
                                                                          </t=
  d>
                                                                          <td=
   class=3D"m_9001294304741892183mobileBodySmall" align=3D"right" style=3D"fo=
  nt-size:17px;color:#11111f;font-family:&#39;LyftProUI-Regular&#39;,&#39;Hel=
  vetica Neue&#39;,Helvetica,Arial,sans-serif;line-height:22px;padding-right:=
  4%" width=3D"30%"> $0.72
                                                                          </t=
  d>
                                                                      </tr></=
  tbody></table>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                     =20
                                                  </td>
                                              </tr>
                                          </tbody></table> <table width=3D"10=
  0%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"20" style=3D"height:20px"></td>
          </tr>
      </tbody></table>
                                      </td>
                                  </tr>
                                 =20
                                 =20
                                  <tr>
                                      <td></td>
                                  </tr>
                                 =20
                                 =20
                                  <tr>
                                      <td> <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"8" style=3D"height:8px"></td>
          </tr>
      </tbody></table> </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table width=3D"92%" cellspacing=3D=
  "0" cellpadding=3D"0" class=3D"m_9001294304741892183big-border-divide" alig=
  n=3D"center">
                                              <tbody><tr>
                                                  <td>=C2=A0</td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table width=3D"100%" cellspacing=
  =3D"0" cellpadding=3D"0" align=3D"center" style=3D"font-size:17px;color:#11=
  111f;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helve=
  tica,Arial,sans-serif;line-height:22px;min-width:100%"><tbody><tr>
                                                  <td colspan=3D"2"> <table w=
  idth=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"10" style=3D"height:10px"></td>
          </tr>
      </tbody></table> </td>
                                              </tr>
                                              <tr>
                                                  <td align=3D"left" class=3D=
  "m_9001294304741892183mobileBodySmall" valign=3D"middle" style=3D"font-size=
  :17px;color:#11111f;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helvetica =
  Neue&#39;,Helvetica,Arial,sans-serif;line-height:22px;padding-left:4%" widt=
  h=3D"70%"><img width=3D"35" height=3D"23" style=3D"border:0;display:inline-=
  block;vertical-align:middle" src=3D"https://s3.amazonaws.com/lyft.zimride.c=
  om/images/emails/credit_icons/cc_apple_pay.png"> <span style=3D"padding-lef=
  t:2%">Apple Pay (Visa)</span></td>
                                                  <td class=3D"m_900129430474=
  1892183mobileHeaderSmall" align=3D"right" style=3D"font-size:30px;color:#11=
  111f;font-family:&#39;LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetic=
  a,Arial,sans-serif;font-weight:bold;line-height:30px;padding-right:4%" vali=
  gn=3D"middle" width=3D"30%"> <strong> $24.99 </strong>
                                                  </td>
                                              </tr></tbody></table>
                                      </td>
                                  </tr>
                                 =20
                                 =20
                                 =20

                                  <tr>
                                      <td> <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"15" style=3D"height:15px"></td>
          </tr>
      </tbody></table> </td>
                                  </tr>

                                 =20

                                 =20
                                  <tr>
                                      <td> <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table> </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <table align=3D"center" valign=3D"m=
  iddle" cellspacing=3D"0" cellpadding=3D"0" width=3D"100%">
                                              <tbody><tr>
                                                  <td align=3D"center" style=
  =3D"padding:0 4%"><img src=3D"https://api.lyft.com/v1/staticmap/19384459451=
  14867334?hash=3Dee22bd6c21569976918668c65a77f0e85c905f237dd47cad61025723913=
  e667d&amp;template=3Dreceipt&amp;version=3Dv2" alt=3D"Ride Map" width=3D"55=
  6" style=3D"width:100%;max-width:556px;display:block">
                                                  </td>
                                              </tr>
                                          </tbody></table> <table width=3D"10=
  0%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table>
                                      </td>
                                  </tr>
                                 =20
                                 =20
                                  <tr>
                                      <td>
                                          <table class=3D"m_90012943047418921=
  83mobileminwidth100" width=3D"100%" cellspacing=3D"0" cellpadding=3D"0" sty=
  le=3D"padding-left:4%;padding-right:4%">
                                              <tbody><tr>
                                                  <td width=3D"100%" cellspac=
  ing=3D"0" cellpadding=3D"0">
                                                      <table width=3D"100%" b=
  order=3D"0" cellspacing=3D"0" cellpadding=3D"0">
                                                          <tbody><tr>
                                                              <td><table alig=
  n=3D"left" width=3D"100%" class=3D"m_9001294304741892183ride-location m_900=
  1294304741892183collapse-border" border=3D"0" cellspacing=3D"0" cellpadding=
  =3D"0">
                                                                      <tbody>=
  <tr>
                                                                          <td=
  > <table width=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"16" style=3D"height:16px"></td>
          </tr>
      </tbody></table> </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   class=3D"m_9001294304741892183location-marker"> <img src=3D"https://s3.ama=
  zonaws.com/lyft.zimride.com/images/emails/markers/v2/pickup.png" style=3D"d=
  isplay:block" width=3D"10" height=3D"10">
                                                                          </t=
  d>
                                                                          <td=
  >
                                                                             =
   <table class=3D"m_9001294304741892183ride-location-heading" width=3D"100%"=
   border=3D"0" cellspacing=3D"0" cellpadding=3D"0">
                                                                             =
       <tbody><tr>
                                                                             =
           <td align=3D"left" width=3D"150" valign=3D"bottom" style=3D"font-f=
  amily:&#39;LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,san=
  s-serif;font-size:20px;font-weight:bold;line-height:24px"> Pickup =C2=A0=C2=
  =A0<a style=3D"color:#acacc0!important;text-decoration:none"><span style=3D=
  "color:#acacc0!important;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helve=
  tica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;text-decoration:no=
  ne">12:34 PM</span></a>
                                                                             =
           </td>
                                                                             =
       </tr>
                                                                             =
   </tbody></table>
                                                                          </t=
  d>
                                                                      </tr><t=
  r>
                                                                          <td=
  >=C2=A0</td>
                                                                          <td=
   class=3D"m_9001294304741892183mobileBodySmall" style=3D"color:#303349;font=
  -family:&#39;LyftProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Aria=
  l,sans-serif;font-size:17px;line-height:24px"> <a style=3D"color:#303349!im=
  portant;text-decoration:none">3650 Grapevine Mills Pkwy, Grapevine, TX</a>
                                                                          </t=
  d>
                                                                      </tr></=
  tbody></table>
                                                              </td>
                                                          </tr><tr>
                                                              <td>
                                                                  <table alig=
  n=3D"left" width=3D"100%" class=3D"m_9001294304741892183ride-location m_900=
  1294304741892183collapse-border" border=3D"0" cellspacing=3D"0" cellpadding=
  =3D"0">
                                                                      <tbody>=
  <tr>
                                                                          <td=
  > <table width=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"16" style=3D"height:16px"></td>
          </tr>
      </tbody></table> </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   class=3D"m_9001294304741892183location-marker">
                                                                             =
   <img src=3D"https://s3.amazonaws.com/lyft.zimride.com/images/emails/marker=
  s/v2/dropoff.png" style=3D"display:block" width=3D"10" height=3D"10">
                                                                          </t=
  d>
                                                                          <td=
  >
                                                                             =
   <table class=3D"m_9001294304741892183ride-location-heading" width=3D"100%"=
   border=3D"0" cellspacing=3D"0" cellpadding=3D"0">
                                                                             =
       <tbody><tr>
                                                                             =
           <td align=3D"left" width=3D"150" valign=3D"bottom" style=3D"font-f=
  amily:&#39;LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,san=
  s-serif;font-size:20px;font-weight:bold;line-height:24px"> Drop-off=C2=A0=
  =C2=A0<a style=3D"color:#acacc0!important;text-decoration:none"><span style=
  =3D"color:#acacc0!important;font-family:&#39;LyftProUI-Regular&#39;,&#39;He=
  lvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;text-decoration=
  :none">1:09 PM</span></a>
                                                                             =
           </td>
                                                                             =
       </tr>
                                                                             =
   </tbody></table>
                                                                          </t=
  d>
                                                                      </tr><t=
  r>
                                                                          <td=
  >=C2=A0</td>
                                                                          <td=
   class=3D"m_9001294304741892183mobileBodySmall" style=3D"color:#303349;font=
  -family:&#39;LyftProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Aria=
  l,sans-serif;font-size:17px;line-height:24px"><a style=3D"color:#303349!imp=
  ortant;text-decoration:none">11515 Maddie Ave, Keller, TX</a>
                                                                          </t=
  d>
                                                                      </tr></=
  tbody></table>
                                                              </td>
                                                          </tr>
                                                      </tbody></table></td>
                                              </tr>
                                          </tbody></table>
                                          <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table>
                                      </td>
                                  </tr>
                                 =20
                                 =20
                                 =20
                                 =20
                                 =20
                                  <tr>
                                      <td>
                                          <table class=3D"m_90012943047418921=
  83wrapto600px" width=3D"600" align=3D"center" border=3D"0" cellpadding=3D"0=
  " cellspacing=3D"0">
                                              <tbody><tr>
                                                  <td style=3D"padding-left:4=
  %;padding-right:4%">
                                                 =20
                                                 =20
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                 =20
                                  <tr>
                                      <td> <table width=3D"100%" cellpadding=
  =3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"8" style=3D"height:8px"></td>
          </tr>
      </tbody></table> </td>
                                  </tr>
                                  <tr>
                                      <td height=3D"30" style=3D"font-size:30=
  px;line-height:30px">=C2=A0</td>
                                  </tr>
                                 =20
                                 =20
                                 =20
                                 =20
                                  <tr>
                                      <td align=3D"center">
                                          <table border=3D"0" cellpadding=3D"=
  0" cellspacing=3D"0" width=3D"100%" class=3D"m_9001294304741892183wrapto600=
  px">
                                              <tbody><tr>
                                                  <td align=3D"center" style=
  =3D"padding:0 4%">
                                                      <table width=3D"100%" c=
  ellspacing=3D"0" cellpadding=3D"0" align=3D"center" bgcolor=3D"#C8CBFC" sty=
  le=3D"background-color:#c8cbfc">
                                                          <tbody><tr>
                                                              <td> <table wid=
  th=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"20" style=3D"height:20px"></td>
          </tr>
      </tbody></table> </td>
                                                          </tr>
                                                          <tr>
                                                              <td align=3D"ce=
  nter">
                                                                  <table>
                                                                      <tbody>=
  <tr>
                                                                          <td=
   align=3D"center" style=3D"color:#5245c2;font-family:&#39;LyftProUI-Bold&#3=
  9;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:24px;font-=
  weight:bold;line-height:24px"> Make expensing business rides easy
                                                                          </t=
  d>
                                                                      </tr>
                                                                  </tbody></t=
  able>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td> <table wid=
  th=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"8" style=3D"height:8px"></td>
          </tr>
      </tbody></table> </td>
                                                          </tr>
                                                          <tr>
                                                              <td align=3D"ce=
  nter">
                                                                  <table alig=
  n=3D"center" valign=3D"middle" cellspacing=3D"0" cellpadding=3D"0">
                                                                      <tbody>=
  <tr>
                                                                          <td=
   align=3D"center" style=3D"color:#5245c2;font-family:&#39;LyftProUI-Regular=
  &#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;li=
  ne-height:20px;padding-left:15%;padding-right:15%"> Enable business profile=
   on Lyft to make expensing rides quick and easy.
                                                                          </t=
  d>
                                                                      </tr>
                                                                  </tbody></t=
  able>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td> <table wid=
  th=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"15" style=3D"height:15px"></td>
          </tr>
      </tbody></table> </td>
                                                          </tr>
                                                          <tr>
                                                              <td align=3D"ce=
  nter" style=3D"color:#5245c2;font-family:&#39;LyftProUI-Bold&#39;,&#39;Helv=
  etica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;font-weight:bold;=
  line-height:20px;padding-left:4%;padding-right:4%"> <a href=3D"https://emai=
  l.lyftmail.com/c/eJxMkM1u2zAQhJ-Gusngv6iDDixcFW0dNLZjuD4JFLWM1FC2K1JQlacvmA=
  BBbruL2ZkP01Wm7AhkUJGCsIIypsqsr4hQLTdEFq0seSGZYVJJEKXjxmDuZDZUFFOOOSVEEUnLj=
  RXYdWVLqJJOFgwjjv3q4mgGv7G3MfNVH-M9IKYRrRGtjbW3-Ro3SZQE6TTHHrEaImJbvdda62-P=
  X5bL_vjj6zi8_p3o8nP7-7DKV1Xn3-PunJ_dLnZn93CM_qWXeHd5UC-ny4qdflouUf-Sh-XkwHr=
  _1N6PYPa9yMew_PFmejzoE6KCbRGVV_iXEt_xqEiAIiEKWi_L8glQ0Lqdw3CFEPL7dHODh7eHeo=
  5jE27zZOHNcxo6aCawMNxjA6mBLJk0I4RgnqEZuspKXIoObK5AuJyTAudlJ4ucKaoAOLa0MNlUm=
  dFcZ_ARgjMrcI44fv5oNFafg0La38f_AQAA__8W25VG" style=3D"color:#5245c2;text-de=
  coration:underline" target=3D"_blank">
                                                                             =
           GET BUSINESS PROFILE
                                                                             =
           </a>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td> <table wid=
  th=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"30" style=3D"height:30px"></td>
          </tr>
      </tbody></table> </td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                          <table cellspacing=3D"0" cellpaddin=
  g=3D"0" align=3D"center" border=3D"0" width=3D"100%">
                                              <tbody><tr>
                                                  <td height=3D"25" style=3D"=
  font-size:25px;line-height:25px">=C2=A0</td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td bgcolor=3D"#F4F4FA" style=3D"backgr=
  ound-color:#f4f4fa;min-width:100%">
                                         =20
                                          <table class=3D"m_90012943047418921=
  83wrapto600px" width=3D"600" align=3D"center" border=3D"0" cellpadding=3D"0=
  " cellspacing=3D"0" bgcolor=3D"#ffffff" style=3D"background-color:#ffffff;m=
  in-width:100%">
                                              <tbody><tr>
                                                  <td>
                                                      <table align=3D"center"=
   width=3D"100%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0" style=3D"b=
  ackground-color:#f4f4fa;min-width:100%;padding-left:4%;padding-right:4%">
                                                          <tbody><tr>
                                                              <td> <table wid=
  th=3D"100%" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">
          <tbody><tr>
              <td height=3D"27" style=3D"height:27px"></td>
          </tr>
      </tbody></table> </td>
                                                          </tr><tr>
                                                              <td align=3D"ce=
  nter" valign=3D"bottom" style=3D"font-family:&#39;LyftProUI-Bold&#39;,&#39;=
  Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;line-height:1=
  50%;text-align:center;color:#000001">
                                                                 =20
                                                                  <center>
                                                                      <div>
                                                                         =20
                                                                             =
   <a href=3D"https://email.lyftmail.com/c/eJxMkE2L2zAQQH-NfHOQRp8--KCSurTN0k=
  2yIc0pyNJo7a6dTW0FN_vri7pQ9vZmeDCPCbWrAsMCa6YZ18C5qYqujlx7FCFozRhl3CuhW24A2=
  1Z5bYIv-hooCCqAMcMUVCsvaQxVy8CoqDSnRNDhHtPo-mHlX8diqLuUrjPhlkBDoHHev94uaZWl=
  LOTVLXWEN5gIX9uttdZ-efy0nLb7b5_H_u33BMv39c_dXb2ZpvyaNsfyGDcpHOPDPg0vnaKb04N=
  5OZzuNNqn5ZTsD7VbDhH9MDy11z26bSfLcV5-DW563NkDAcnXBNQF_-SL73kgc6DMiRKaZVk-BE=
  poXAipv_5DVnEjhKyEZEwYpTkXRXbPI86ze8ZzH2qvaCUD-tKgjKVgmpZVULrkBgyioB60K6baj=
  e5ywyHhHN0dhSCCPv9_XKqnPuB5Qo_9Nc15fse_AQAA___OCYi8" style=3D"font-family:&=
  #39;LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif=
  ;background-color:#ffffff;border-radius:30px;color:#000001;display:inline-b=
  lock;font-size:17px;font-weight:bold;line-height:50px;text-align:center;tex=
  t-decoration:none;width:210px" target=3D"_blank">Tip driver
                                                                             =
   </a>
                                                                         =20
                                                                      </div>
                                                                  </center>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td height=3D"2=
  4" style=3D"font-size:24px;line-height:24px">=C2=A0</td>
                                                          </tr><tr>
                                                              <td align=3D"ce=
  nter" valign=3D"bottom" style=3D"font-family:&#39;LyftProUI-Bold&#39;,&#39;=
  Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;line-height:1=
  50%;text-align:center;color:#000001">
                                                                 =20
                                                                  <center>
                                                                      <div>
                                                                         =20
                                                                             =
   <a href=3D"https://email.lyftmail.com/c/eJxMjsuK6zAYg5_G2aX8N98WXhw45DWKY_=
  9uA8m0NC6hbz-EgWF2n5CEVFOOFXXQhB7ZE3OIwz1VJEuQ7VwBrC8zt6a5-OzIOQdzHJZEQAJCi=
  AEdxUux0GqckYJrzjMYgfXT-paX9VIe27Cme-_P3fA_Q5Oh6TiOyxk4TUPT-tj70vVEjBxEbBSL=
  KMF5ZjE8vftm-P9rqXp9adHl2Yezft103_NNr0tNxUG0VcsY1LZR0MMYq_MjBwqqAoV8Hl4pb_n=
  rrWvXveWPihiB2-_Nnv5O7Kf-we8AAAD__51tWqA" style=3D"font-family:&#39;LyftPro=
  UI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;background=
  -color:#ffffff;border-radius:30px;color:#000001;display:inline-block;font-s=
  ize:17px;font-weight:bold;line-height:50px;text-align:center;text-decoratio=
  n:none;width:210px" target=3D"_blank">Find lost item
                                                                             =
   </a>
                                                                         =20
                                                                      </div>
                                                                  </center>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td height=3D"2=
  4" style=3D"font-size:24px;line-height:24px">=C2=A0</td>
                                                          </tr>
                                                          <tr>
                                                              <td align=3D"ce=
  nter" valign=3D"bottom" style=3D"font-family:&#39;LyftProUI-Bold&#39;,&#39;=
  Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:17px;line-height:1=
  50%;text-align:center;color:#000001">
                                                                 =20
                                                                  <center>
                                                                      <div>
                                                                         =20
                                                                             =
   <a href=3D"https://email.lyftmail.com/c/eJxMkM1u2zAQhJ9Guskgl_8HHVi4Kto6aG=
  zHcH0yaHIZqZEcV6KhOk9fMAEC32YXszMfNtTOBIol1lRRpoAxbcq2PgWvPaJUTGttThwkeC6IE=
  YJ7qqQuuxoIcMKBUk0lmIUXJAZzoqBllIqRgpP-FtPgun7hX4eyr9uULlPBbAFNAY3z_vV6Tots=
  yoa8uqa2YA2mgi3t2lprvz1-mQ_r7Y-vQ_f2d4T55_L35ibfdFN9T6t9tY-rFPbxYZv6l1aS1eF=
  Bv-wONxLt03xI9pfczLuIvu-fTpctunUrqmGa__RufNzYXQGCLQuQZ_yXGz_wQGRAkREFNPM83w=
  EKaMYu4PSuqGGac2G4oJRrqRjj-bi5puE9ODuPI3rsLqnMGccBp8k947ELtZfEiIC-0ihixakil=
  QlSVUyDRuTEg3LlWLvBna_YJ5yiuyHnBSfPnw9N9X3FlOcP-T8AAP__2PCQAg" style=3D"fon=
  t-family:&#39;LyftProUI-Bold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,=
  sans-serif;background-color:#ffffff;border-radius:30px;color:#000001;displa=
  y:inline-block;font-size:17px;font-weight:bold;line-height:50px;text-align:=
  center;text-decoration:none;width:210px" target=3D"_blank">Request review
                                                                             =
   </a>
                                                                         =20
                                                                      </div>
                                                                  </center>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td height=3D"2=
  4" style=3D"font-size:24px;line-height:24px">=C2=A0</td>
                                                          </tr>

                                                      </tbody></table>
                                                      </td>
                                              </tr>
                                          </tbody></table>
                                         =20
                                         =20
                                          <table class=3D"m_90012943047418921=
  83wrapto600px" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" bgcolor=3D"=
  #F4F4FA" style=3D"background-color:#f4f4fa;min-width:100%;max-width:600px">
                                              <tbody><tr>
                                                  <td>
                                                      <table cellspacing=3D"0=
  " cellpadding=3D"0" align=3D"center" border=3D"0" width=3D"100%" bgcolor=3D=
  "#F4F4FA">
                                                          <tbody><tr>
                                                              <td height=3D"3=
  0" style=3D"font-size:30px;line-height:30px">=C2=A0</td>
                                                          </tr>
                                                      </tbody></table><table =
  cellspacing=3D"0" cellpadding=3D"0" align=3D"center" class=3D"m_90012943047=
  41892183wrapto600px" bgcolor=3D"#F4F4FA" style=3D"background-color:#f4f4fa;=
  min-width:100%;max-width:600px">
                                                          <tbody><tr>
                                                              <td style=3D"co=
  lor:#63637b;text-align:center;padding:0 25px;font-family:&#39;LyftProUI-Reg=
  ular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:13p=
  x;line-height:13px"> To protect against unauthorized behavior, you may see =
  <a href=3D"https://email.lyftmail.com/c/eJw8jUtqwzAUAE8j7RzeT7-FFt14WegJjCo=
  9JQa7CbZayO1LKHQ3AwPTckkN1WrGgByIOSZ7y05iSJU7O2y1JMdFqnIipzEQ-G7XTEACQogRPa=
  VLddBb-kSKvvvAYAS2Zx97WbdLve92y7cxHobfDM2G5q2Py7gbmvH9-Pghsq942fU8y1WXteXqI=
  bmmdYrq-iQYYErNh4kjRVWBSqHYI5e9fH3rNvTs5akiRuD6_xz5WJsuh1ZdH-N8-R_-BgAA__8i=
  pkn8" style=3D"color:#ff00bf;text-decoration:underline" target=3D"_blank">a=
  n authorization hold</a> on your bank statement. This is to verify your pay=
  ment method and will not be charged.
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                      <table cellspacing=3D"0=
  " cellpadding=3D"0" align=3D"center" border=3D"0" width=3D"100%" bgcolor=3D=
  "#F4F4FA">
                                                          <tbody><tr>
                                                              <td height=3D"3=
  0" style=3D"font-size:30px;line-height:30px">=C2=A0
                                                              </td>
                                                          </tr>
                                                      </tbody></table><table =
  width=3D"100%" cellspacing=3D"0" cellpadding=3D"0" align=3D"center" class=
  =3D"m_9001294304741892183wrapto600px" bgcolor=3D"#F4F4FA" style=3D"backgrou=
  nd-color:#f4f4fa;min-width:100%;max-width:600px"></table>
                                                      <table cellspacing=3D"0=
  " cellpadding=3D"0" align=3D"center" border=3D"0" style=3D"background-color=
  :#f4f4fa;min-width:100%;max-width:600px">
                                                          <tbody><tr>
                                                              <td height=3D"3=
  0" style=3D"font-size:30px;line-height:30px">=C2=A0</td>
                                                          </tr>
                                                      </tbody></table><table =
  cellspacing=3D"0" cellpadding=3D"0" align=3D"center" class=3D"m_90012943047=
  41892183wrapto600px" bgcolor=3D"#F4F4FA" style=3D"background-color:#f4f4fa;=
  min-width:100%;max-width:600px">
                                                          <tbody><tr>
                                                              <td align=3D"ce=
  nter" style=3D"text-align:center"> <a href=3D"https://email.lyftmail.com/c/=
  eJw8jb1qxDAQhJ_G7nzsrv4LFWnuNYxOuzoL5MRYSuG3D-Yg1cwwH3wcU2CUWSI6VI6U8mHeojP=
  BmYJ3ALIntC8OGawSKRx8mWskIA2aED1aCo9soHB4IXlbrFMwaWhXGXuq7ZF_9rnFbYyjT-prou=
  dEz03a8biJz3uVse7Se3rLWjlmC8Gw5MWLKYtGB0tg6xblyYtoyOTSfMa0p-9faUN6SZdoPWl4_=
  xtHPCvLekqWeox-70_9CwAA__8Ol0px" style=3D"color:#ff00bf;text-align:center;p=
  adding:0 25px;font-family:&#39;LyftProUI-SemiBold&#39;,&#39;Helvetica Neue&=
  #39;,Helvetica,Arial,sans-serif;font-size:15px;line-height:17px;text-decora=
  tion:none" target=3D"_blank">Help Center</a>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                      <table align=3D"center"=
   cellpadding=3D"0" cellspacing=3D"0" border=3D"0" bgcolor=3D"#F4F4FA">
                                                          <tbody><tr>
                                                              <td height=3D"1=
  5" style=3D"height:15px"></td>
                                                          </tr>
                                                      </tbody></table>
                                                      <table cellspacing=3D"0=
  " cellpadding=3D"0" align=3D"center" class=3D"m_9001294304741892183wrapto60=
  0px" bgcolor=3D"#F4F4FA" style=3D"background-color:#f4f4fa;min-width:100%;m=
  ax-width:600px"><tbody><tr>
                                                              <td align=3D"ce=
  nter" style=3D"text-align:center;padding:0 25px;font-family:&#39;LyftProUI-=
  Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:=
  15px;line-height:15px;text-decoration:none;color:#63637b"> Receipt #1938445=
  945114867334
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td>
                                                                  <table cell=
  spacing=3D"0" cellpadding=3D"0" align=3D"center" border=3D"0" bgcolor=3D"#F=
  4F4FA" style=3D"background-color:#f4f4fa;min-width:100%;max-width:600px">
                                                                      <tbody>=
  <tr>
                                                                          <td=
   height=3D"12" style=3D"font-size:12px;line-height:12px">=C2=A0</td>
                                                                      </tr>
                                                                  </tbody></t=
  able>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td align=3D"ce=
  nter" style=3D"text-align:center;padding:0 25px;font-family:&#39;LyftProUI-=
  Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:=
  13px;line-height:13px;text-decoration:none;color:#63637b"> We never share y=
  our address with your driver after a ride. <br> <a href=3D"https://email.ly=
  ftmail.com/c/eJw8jc9qxCAQh59Gb1l0NI4ePPSS1whTZ9wVknaJlpC3L6HQ2-_PBx9nSmxFS7=
  ZoHYJzMelXDiFZ5hLZeYqCSZCCRUlEhqsg6JbBgDcerI02QHqU2VROnxZiqAGdUd5sVx07te1Rv=
  ne95dcY767ch4JFwXKe5-MG7lPB0qnKuPS9rLv0Tk9ZG-cSTJpZyhRlrpO3aKbEAScXIYp4UwBJ=
  H5l2-vqRbUivdIn3ypvnv3nko7GshxRp79Hv_hd_AwAA__8kFk4L" style=3D"color:#ff00b=
  f;text-decoration:underline" target=3D"_blank">Learn more</a> about our com=
  mitment to safety.
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td>
                                                                  <table cell=
  spacing=3D"0" cellpadding=3D"0" align=3D"center" border=3D"0" bgcolor=3D"#F=
  4F4FA" style=3D"background-color:#f4f4fa;min-width:100%;max-width:600px">
                                                                      <tbody>=
  <tr>
                                                                          <td=
   height=3D"12" style=3D"font-size:12px;line-height:12px">=C2=A0</td>
                                                                      </tr>
                                                                  </tbody></t=
  able>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                          <td align=3D"center=
  " style=3D"color:#63637b;text-align:center;padding:0 25px;font-family:&#39;=
  LyftProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;=
  font-size:13px;line-height:13px">
                                                             =20
                                                              <a href=3D"http=
  s://email.lyftmail.com/c/eJw8js2qriAUQJ9GZ8V2a_4MHNxJrxGm2xLqK9RL9PaHjwNntt=
  ZgwUo-uCSIkxdGSINSWsd374yWUuW0ihWiDtIZiAZXUjIkRUC8eARUoFAIKzS6MU6Qk1sFWp21k=
  cAUHG_uZyjHGK-TH37v_W5M_mM4M5yf5xmvmz6tV6J-hnu86sZwjtf91rLtnX_z5aTWwkZLST5q=
  cFOiOFia8qCEgcElbQZp0RIpiGgCrz6c4fOfjk4th5eUYgq2v4vua0m0VIpU7t6-_os_AQAA__8=
  ocFLd" style=3D"color:#ff00bf;text-decoration:underline" target=3D"_blank">=
  =C2=A9 OpenStreetMap</a>
                                                             =20
                                                          </td>
                                                          </tr>
                                                      </tbody></table>=20
                                                      <div style=3D"display:n=
  one;font-size:1px;color:#ffff">
                                                          <span><a href=3D"ma=
  ilto:amanueltesfaye44@gmail.com" target=3D"_blank">amanueltesfaye44@gmail.c=
  om</a></span>
                                                          <span></span>
                                                          <span>Lyft</span>
                                                          <span>2024-04-20</s=
  pan>
                                                          <span>USD</span>
                                                          <span>24.99</span>
                                                          <span>Taxi</span>
                                                          <span>1938445945114=
  867334</span>
                                                          <span></span>
                                                          <span></span>
                                                          <span>0.00</span>
                                                      </div>=20
                                                     =20
                                                     =20
                                                      <table cellpadding=3D"0=
  " cellspacing=3D"0" border=3D"0" bgcolor=3D"#F4F4FA" style=3D"background-co=
  lor:#f4f4fa;min-width:100%;max-width:600px">
                                                          <tbody><tr>
                                                              <td height=3D"2=
  0" style=3D"height:20px"></td>
                                                          </tr>
                                                      </tbody></table>
                                                      <table class=3D"m_90012=
  94304741892183wrapto600px" align=3D"center" border=3D"0" cellpadding=3D"0" =
  cellspacing=3D"0" bgcolor=3D"#F4F4FA" style=3D"background-color:#f4f4fa;min=
  -width:100%">
                                                          <tbody><tr>
                                                              <td width=3D"5%=
  " style=3D"background-color:#f4f4fa">=C2=A0</td>
                                                              <td width=3D"90=
  %" align=3D"center" valign=3D"bottom">
                                                                  <table widt=
  h=3D"100%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center=
  " style=3D"margin:0 auto;table-layout:fixed">
                                                                      <tbody>=
  <tr>
                                                                          <td=
   align=3D"center" height=3D"25" style=3D"color:#63637b;font-family:&#39;Lyf=
  tProUI-SemiBold&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;fo=
  nt-size:17px;font-weight:400;line-height:25px;text-align:center">=C2=A9 202=
  4 Lyft, Inc.
                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   align=3D"center" style=3D"color:#63637b;font-family:&#39;LyftProUI-SemiBol=
  d&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:15px;l=
  ine-height:17px" class=3D"m_9001294304741892183footer-text-small"> <a style=
  =3D"text-decoration:none;color:#63637b">548 Market St., P.O. Box 68514</a>
                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   align=3D"center" style=3D"color:#63637b;font-family:&#39;LyftProUI-SemiBol=
  d&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:15px;l=
  ine-height:17px" class=3D"m_9001294304741892183footer-text-small"> <a style=
  =3D"text-decoration:none;color:#63637b">San Francisco, CA 94104<br>CPUC ID =
  No. TCP0032513 - P</a>
                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   align=3D"center" valign=3D"top" style=3D"color:#63637b;font-family:&#39;Ly=
  ftProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;fo=
  nt-size:14px">
                                                                             =
  =20
                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   align=3D"center" height=3D"25" style=3D"color:#63637b;font-family:&#39;Lyf=
  tProUI-Regular&#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;fon=
  t-size:14px">

                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   align=3D"center" style=3D"color:#63637b;font-family:&#39;LyftProUI-Regular=
  &#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:14px;li=
  ne-height:17px" class=3D"m_9001294304741892183footer-text-small"> <a class=
  =3D"m_9001294304741892183footer-text-small" href=3D"https://email.lyftmail.=
  com/c/eJw8jsGK9CAQhJ9Gbwlqd7Q9ePjhJ68RjLYzgWRnUEOYt1_CLnuroj6oL4fos2bJQTsNz=
  gCQl8-gENaYChEgkM8IQNNaFNkVddYW5BaMMqjQaE3aGj-mSZXsV23IFutACVT7p_QjbvuYXofc=
  w7P3dxPwT5hZmPm6rvEG7lGYOcXKXJuA-ezH0l5nTSzgf-XE27vLm1wObi0-eNlySFb5KXMaiKc=
  yoHZq8Nm6AcgQM6pkXJQ1xCN-nbx3biV-GFGgevwZ9VC3zMvvRbv7T_wOAAD__0N9Vc8" style=
  =3D"color:#63637b;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helvetica Ne=
  ue&#39;,Helvetica,Arial,sans-serif;text-decoration:none;font-size:14px" tar=
  get=3D"_blank"> Work at Lyft </a>
                                                                          </t=
  d>
                                                                      </tr>
                                                                      <tr>
                                                                          <td=
   align=3D"center" style=3D"color:#63637b;font-family:&#39;LyftProUI-Regular=
  &#39;,&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:14px;li=
  ne-height:17px" class=3D"m_9001294304741892183footer-text-small"> <a class=
  =3D"m_9001294304741892183footer-text-small" href=3D"https://email.lyftmail.=
  com/c/eJw8jt1qxCAUhJ9G71z0-H_hRaHkNYLrOW6EpLtE07BvX0JL72bmG5jBlCMq4pSUV9qD1=
  iHyJWG4O4wuGqi60N3qjLbIWAuidGSBtwQSjDSgVFAO4q1YWTHeFQRXndeSGbm-69hyW2_lufE1=
  LWO8OtMfDCYG03met6twQQYT7u2bxNnGIq6U6ekY29yfx16I6c-dCrXX4BebN-o9P2humIqT0SI=
  VEchWYZSXIqLzQgcIREYW8JnvKW_566B1UK_5TcYwIx__z0baG9L8N9Ev_yt_AgAA__8_iFn_" =
  style=3D"color:#63637b;font-family:&#39;LyftProUI-Regular&#39;,&#39;Helveti=
  ca Neue&#39;,Helvetica,Arial,sans-serif;text-decoration:none;font-size:14px=
  " target=3D"_blank"> Become a Driver </a>
                                                                          </t=
  d>
                                                                      </tr>
                                                                  </tbody></t=
  able>
                                                              </td>
                                                              <td width=3D"5%=
  " style=3D"background-color:#f4f4fa">=C2=A0</td>
                                                          </tr>
                                                      </tbody></table>
                                                      <table cellpadding=3D"0=
  " cellspacing=3D"0" border=3D"0" bgcolor=3D"#F4F4FA" style=3D"background-co=
  lor:#f4f4fa;min-width:100%;max-width:600px">
                                                          <tbody><tr>
                                                              <td height=3D"2=
  0" style=3D"height:20px"></td>
                                                          </tr>
                                                      </tbody></table>
                                                     =20
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>
     =20
  <img width=3D"1px" height=3D"1px" alt=3D"" src=3D"https://email.lyftmail.co=
  m/o/eJw8zDFuwzAMQNHTRJsDkaJEatBZDEakUgF2W9jukNsXQYFu_y3fmlYDD96AITGmJDV8NM7=
  OQ0hUrFSW7I9KCj0hpy5uFmbDiBQJAQQK1nvPcVh9AEoZhVO8Udxe49p1bvf-tYc31t3PU5--Tm=
  u9xJrN-yKex0LAcalWeEmC4k6xI2s4mu76-ePb5efQlxPdKD7_n1c7pvl6ePf5fZ1v_-VvAAAA_=
  _9NV0D7"></div>


  </div></div></div>

  --000000000000d880ed06190d2f52--`,
];
