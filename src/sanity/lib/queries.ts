export function getHomeData() {
  return `*[_type == "homepage"][0]{
  logo {
    asset->{
      url
    }
  },
  link1,
  link2,
  link3,
  link4,
  href1,
  href2,
  href3,
  href4,
  buttonText,
  heroTitle,
  heroSubTitle
}
`
}

export function getPreviewData() {
  return `*[_type == "preview"][0]{
    Title,
    point1,
    point2,
    point3,
    point4,
    point5,
    "mobVideoUrl": mobVideo.asset->url,
    "desVideoUrl": desVideo.asset->url
  }


`
}
export function getAboutData() {
  return `*[_type == "sectionFeaturesWithIcons"][0]{
  title,
  title2,
  description1,
  description2,
  image1 {
    asset->{
      _id,
      url
    }
  },
  image2 {
    asset->{
      _id,
      url
    }
  },
  images[] {
    asset->{
      _id,
      url
    }
  },
  features[] {
    title,
    description,
    icon {
      asset->{
        _id,
        url
      }
    }
  }
}

`;

}
export function getRoadmapData() {
  return `*[_type == "roadmap"]{
  _id,
  title1,
  title2,
  subtitle,
  
  // Icons with titles and subtitles
  icon1{asset->{url}}, iconTitle1, iconSubtitle1,
  icon2{asset->{url}}, iconTitle2, iconSubtitle2,
  icon3{asset->{url}}, iconTitle3, iconSubtitle3,
  icon4{asset->{url}}, iconTitle4, iconSubtitle4,
  
  // Leagues
  league1, league2, league3, league4, league5, league6, league7, league8, league9,
  
  // MAUs
  mau1, mau2, mau3, mau4, mau5, mau6,
  
  // Images with alt texts
  image1{asset->{url}, alt},
  image2{asset->{url}, alt},
  image3{asset->{url}, alt},
  image4{asset->{url}, alt},
  image5{asset->{url}, alt},
  image6{asset->{url}, alt},
  image7{asset->{url}, alt},
  image8{asset->{url}, alt}
}



`;

}
export function getFooterData() {
  return `
  *[_type == "footerSection"][0]{
    logo { asset->{url} },
    linkTitle1, linkUrl1,
    linkTitle2, linkUrl2,
    linkTitle3, linkUrl3,
    linkTitle4, linkUrl4,
    buttonText,
    copyright,
    socialIcon1 { asset->{url} }, socialUrl1,
    socialIcon2 { asset->{url} }, socialUrl2,
    socialIcon3 { asset->{url} }, socialUrl3,
    socialIcon4 { asset->{url} }, socialUrl4
  }
`;

}
