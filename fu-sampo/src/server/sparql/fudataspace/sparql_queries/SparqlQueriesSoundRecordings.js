const perspectiveID = 'soundrecordings'


export const soundrecordingProperties = `
    {
      ?id rdfs:label ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(?id AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id wdt:P16 ?partof__id .
      ?partof__id rdfs:label ?partof__prefLabel .
      FILTER(LANGMATCHES(LANG(?partof__prefLabel),'en'))
    }
    UNION
    {
      ?id wdt:P80 ?language__id .
      ?language__id rdfs:label ?language__prefLabel .
      FILTER(LANGMATCHES(LANG(?language__prefLabel),'en'))
    }
`

export const knowledgeGraphMetadataQuery = `
  SELECT * 
  WHERE {
    ?id a sd:Dataset ;
        dct:title ?title ;
        dct:publisher ?publisher ;
        dct:rightsHolder ?rightsHolder ;
        dct:modified ?modified ;
        dct:source ?databaseDump__id .
    ?databaseDump__id skos:prefLabel ?databaseDump__prefLabel ;
                      mmm-schema:data_provider_url ?databaseDump__dataProviderUrl ;
                      dct:modified ?databaseDump__modified .
  }
`
