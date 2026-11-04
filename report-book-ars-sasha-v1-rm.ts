<TeXmacs|2.1.4>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|report-book-ars-sasha|1.0 rm concrete>

      <\src-purpose>
        The book template customized by Alessandro Dimichino.
      </src-purpose>

      <\compound|src-copyright|\<copyright\> 2026>
        Alessandro Dimichino
      </compound>

      <\src-license>
        This software falls under the <hlink|GNU general public license,
        version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
        WARRANTY WHATSOEVER. You should have received a copy of the license
        which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
      </src-license>
    </src-title>
  </active*>

  <use-package|std|env-base|env-math|env-enunciation|env-float|env-program|header-book|title-base|section-book|html-font-size>

  \;

  <style-package|report-book-ars-sasha|1.0>

  <active*|<\src-comment>
    Global layout.
  </src-comment>>

  <assign|font|math=ENR, concrete>

  <assign|font-base-size|10>

  <assign|midgrey|#959595>

  <active*|<\src-comment>
    Sizes.
  </src-comment>>

  <assign|tiny|<macro|x|<with|font-size|0.5|par-sep|1pt|<arg|x>>>>

  <assign|very-small|<macro|x|<with|font-size|0.7|par-sep|1pt|<arg|x>>>>

  <assign|smaller|<macro|x|<with|font-size|0.8|par-sep|2pt|<arg|x>>>>

  <assign|small|<macro|x|<with|font-size|0.9|par-sep|2pt|<arg|x>>>>

  <assign|normal-size|<macro|x|<with|font-size|1.0|par-sep|2em|<arg|x>>>>

  <assign|large|<macro|x|<with|font-size|1.2|par-sep|2pt|<arg|x>>>>

  <assign|larger|<macro|x|<with|font-size|1.4|par-sep|<minus|<tmlen|16dd>|<tmlen|14pt>>|<arg|x>>>>

  <assign|very-large|<macro|x|<with|font-size|1.7|par-sep|<minus|<tmlen|17dd>|<tmlen|17pt>>|<arg|x>>>>

  <assign|huge|<macro|x|<with|font-size|2.0|par-sep|5pt|<arg|x>>>>

  <assign|really-huge|<macro|x|<with|font-size|2.5|par-sep|5pt|<arg|x>>>>

  <active*|<\src-comment>
    Sectional macros.\ 

    Allowed fonts: tiny, very-small, smaller, small, normal-size, large,
    larger, very-large, huge, really-huge

    Allowed sectionals: no-indent, short, normal, centered, short-italic,
    normal-italic, centered-italic, short-bold, normal-bold, centered-bold,
    prefixed

    Allowed font-shapes: upright, slanted, italic, left slanted, Small
    Capitals, proportional typewriter, bold condensed (condensed), flat sans
    serif (flat), long

    Allowed font-family: rm(roman),tt(typewriter),ss(sans serif)

    Allowed font-series: medium, bold

    --------

    In v2 added part-title and chapter-title. Size from large to larger in
    section-title. Aggiunto color navy blue and dark red as alternatives,
    darg grey

    Chapter and Sections are in small-caps\ 

    <assign|part-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<vspace*|<tmlen|1.7bls|1.6bls|2.1bls>><with|font-family|ss|<very-large|<with|font-shape|small-caps|<with|color|dark
    red|<arg|name>>>>><vspace|1bls>>>>>
  </src-comment>>

  <active*|<\src-comment>
    Sectional macros.

    Defined a new style for the Number of the chapter
  </src-comment>>

  <assign|part-size|<macro|x|<very-large|<arg|x>>>>

  <assign|part-style|<macro|x|<with|font-family|rm|<with|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>>

  <assign|chap-size|<macro|x|<larger|<arg|x>>>>

  <assign|chap-style|<macro|x|<with|font-family|rm|<with|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>>

  <assign|chap-num-size|<macro|x|<really-huge|<arg|x>>>>

  <assign|chap-num-style|<macro|x|<with|font|ENR|<arg|x>>>>

  <assign|sec-size|<macro|x|<large|<arg|x>>>>

  <assign|sec-style|<macro|x|<with|font-family|rm|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>

  <assign|subsec-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|subsec-style|<macro|x|<with|font-family|rm|<with|font-shape|slanted|math-font-shape|slanted|<arg|x>>>>>

  <assign|subsubsec-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|subsubsec-style|<macro|x|<with|font-family|rm|<with|font-shape|italic|math-font-shape|italic|<arg|x>>>>>

  <assign|paragraph-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|paragraph-style|<macro|x|<with|font-family|rm|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>

  <assign|enrich-paragraph-long|true>

  <assign|part-number-title|<macro|num|title|<style-with|src-compact|none|<blanc-page><no-indent><new-line><no-indent><with|color|dark
  grey|<wide-std-underlined|<part-style|<chap-size|<htab|0mm><with|color|dark
  grey|<part-text><arg|num>>><vspace|0pt><new-line>>>><vspace|106pt><new-line><no-indent><part-style|<part-size|<htab|0mm><with|color|black|<arg|title>>>><vspace|10pt><no-page-break><no-indent*><right-flush>>>>

  <assign|part-title|<macro|title|<part-number-title||<arg|title>>>>

  <assign|part-numbered-title|<macro|title|<part-number-title|
  <the-part>|<arg|title>>>>

  <assign|chapter-number-title|<macro|num|title|<style-with|src-compact|none|<no-indent><new-line><no-indent><chap-num-style|<with|color|<value|midgrey>|<htab|0mm><chap-num-size|<arg|num>>>><vspace|10pt><new-line><no-indent><chap-style|<with|color|<value|midgrey>|<wide-std-underlined|<chap-style|<with|<chap-size|<with|color|darker
  grey|<arg|title>>><vspace|0pt><new-line>>>>>><vspace|56pt><no-page-break><no-indent*><right-flush>>>>

  <assign|tmhtml-chapter-number-title|<macro|num|title|<chapter-title|<arg|num><space|0.5em><arg|title>>>>

  <assign|chapter-title|<macro|title|<chapter-number-title||<with|color|<value|midgrey>|<arg|title>>>>>

  <assign|chapter-numbered-title|<macro|title|<chapter-number-title|<the-chapter>|<arg|title>>>>

  <assign|appendix-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-number-title|<appendix-text>
  <the-appendix>|<arg|title>>>>>

  <assign|section-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|1bls><sec-style|<sec-size|<with|color|darker
  grey|<arg|name>>>><vspace|1bls>>>>>>

  <assign|subsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|1bls><subsec-style|<subsec-size|<with|color|darker
  grey|<arg|name>>>><vspace|1bls>>>>>>

  <assign|subsubsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|1bls><subsubsec-style|<subsubsec-size|<with|color|darker
  grey|<arg|name>>>><vspace|1bls>>>>>>

  <assign|paragraph-title|<macro|name|<style-with|src-compact|none|<sectional-normal-italic|<style-with|src-compact|none|<vspace*|0.5bls><normal-size|<with|color|darker
  grey|<arg|name>>><vspace|0.5bls>>>>>>

  <assign|subparagraph-title|<macro|name|<style-with|src-compact|none|<sectional-short-italic|<style-with|src-compact|none|<vspace*|0.5bls><normal-size|<with|color|darker
  grey|<arg|name>>><space|5pt>>>>>>

  <\active*>
    <\src-comment>
      Caption e label macros.

      Captions in ss. Non funziona
    </src-comment>
  </active*>

  <assign|render-caption-old|<\macro|name|text|description>
    <\with|font-family|ss>
      <bold|<arg|><arg|text><space|1spc>><with|font-family|ss|<arg|description>>

      \;
    </with>
  </macro>>

  <active*|<\src-comment>
    Section and environment numbering.

    v2 added chapter-sep
  </src-comment>>

  <assign|between-number-space|<macro|5pt>>

  <assign|sectional-sep|<macro|<space|<between-number-space>>>>

  <assign|tmhtml-sectional-sep|<macro|<space|0.5em>>>

  <assign|*part-sep|<macro|<macro|7pt>>>

  <assign|chapter-display-numbers|<macro|true>>

  <assign|section-display-numbers|<macro|true>>

  <assign|subsection-display-numbers|<macro|true>>

  <assign|subsubsection-display-numbers|<macro|true>>

  <assign|paragraph-display-numbers|<macro|false>>

  <assign|subparagraph-display-numbers|<macro|false>>

  <\active*>
    <\src-comment>
      Headers. Page number in black and small size. Title in dark grey with a
      smaller character size.

      To be done: instead of the author to have section number with a style
      similar to latex arsclassica.

      Allowed headers: header-title, header-author, header-primary,
      header-secondary

      \<less\>assign\|header-title\|\<less\>macro\|name\|\<gtr\>\<gtr\>

      \<less\>assign\|header-author\|\<less\>macro\|name\|\<gtr\>\<gtr\>

      \<less\>assign\|header-primary\|\<less\>macro\|name\|nr\|type\|\<less\>assign\|page-even-header\|\<less\>smaller\|\<less\>style-with\|src-compact\|none\|\<less\>no-indent\<gtr\>\<less\>with\|font-family\|ss\|\<less\>with\|font-shape\|small-caps\|\<less\>page-number\<gtr\>\<less\>htab\|5mm\<gtr\>\<less\>with\|color\|darkgrey\|\<less\>arg\|name\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>

      \<less\>assign\|header-secondary\|\<less\>macro\|name\|nr\|type\|\<less\>assign\|page-odd-header\|\<less\>smaller\|\<less\>style-with\|src-compact\|none\|\<less\>no-indent\<gtr\>\<less\>with\|font-family\|ss\|\<less\>with\|font-shape\|small-caps\|\<less\>page-number\<gtr\>\<less\>htab\|5mm\<gtr\>\<less\>with\|color\|darkgrey\|\<less\>arg\|name\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>\<gtr\>

      All'inizio meglio azzerare tutto e dopo inserire le macro corrette.

      <assign|header-title|<macro|name|>>
      \ <assign|header-author|<macro|name|>>
      <assign|header-primary|<macro|name|nr|type|<assign|page-even-header|<smaller|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<page-number><htab|5mm><with|color|dark
      grey|<arg|name>>>>>>>>> <assign|header-secondary|<macro|name|nr|type|<assign|page-odd-header|<smaller|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<page-number><htab|5mm><with|color|dark
      grey|<arg|name>>>>>>>>>
    </src-comment>
  </active*>

  <assign|header-primary|<macro|name|nr|what|>>

  <assign|header-secondary|<macro|name|nr|what|>>

  <assign|header-author|<macro|name|>>\ 

  <assign|header-title|<macro|name|>>\ 

  <assign|header-title|<macro|name|<style-with|src-compact|none|||||<simple-page><assign|page-even-header|<small|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<with|color|dark
  grey|<arg|name>><htab|5mm><page-number>>>>>>>>> \ 

  \;

  <assign|header-author-old|<macro|name|<assign|page-even-header|<small|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<page-number><htab|5mm><with|color|dark
  grey|<arg|name>>>>>>>>>

  <assign|header-secondary|<macro|name|nr|what|<assign|page-odd-header|<small|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<with|color|dark
  grey|<arg|name>><htab|5mm><page-number>>>>>>>>

  <\active*>
    <\src-comment>
      List environment

      Item bullets in dark grey
    </src-comment>
  </active*>

  <assign|aligned-item|<macro|name|<style-with|src-compact|none|<vspace*|<item-vsep>><with|par-first|<minus|<item-hsep>>|<yes-indent>><resize|<with|color|dark
  grey|<arg|name>>|<minus|1r|<minus|<item-hsep>|0.5fn>>||<plus|1r|0.5fn>|>>>>

  <\active*>
    <\src-comment>
      Title information. Aggiunto uptitle
    </src-comment>
  </active*>

  <assign|doc-title-block|<macro|body|<tabular|<tformat|<twith|table-width|1par>|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<cwith|1|1|1|1|cell-bsep|0spc>|<cwith|1|1|1|1|cell-tsep|0spc>|<cwith|1|1|1|1|cell-hyphen|t>|<table|<row|<\cell>
    <with|par-first|0fn|<arg|body>>
  </cell>>>>>>>

  <assign|sasha-doc-uptitle|<\macro|body>
    <\surround|<vspace*|120pt>|<vspace|22.47pt>>
      <doc-title-block|<large|<\with|font-family|ss>
        <with|color|dark grey|<with|font-series|bold|<arg|body>>>
      </with>>>
    </surround>
  </macro>>

  <assign|doc-title|<\macro|body>
    <\surround||<vspace|11.24pt>>
      <\doc-title-block>
        <\really-huge>
          <\with|font-family|ss>
            <with|color|darker grey|<with|font-series|bold|<arg|body>>>
          </with>
        </really-huge>
      </doc-title-block>
    </surround>

    \;
  </macro>>

  <assign|doc-make-title|<macro|body|<surround||<vspace|22.47pt>|<doc-title-block|<arg|body>>>>>

  <\active*>
    <\src-comment>
      Title information. <assign|doc-subtitle|<macro|x|<\surround||<vspace|11.24pt>>
        <doc-title-block|<large|<with|font-family|ss|<with|math-font-series|bold|font-series|bold|<arg|x>>>>>
      </surround>>>
    </src-comment>
  </active*>

  <assign|doc-subtitle|<macro|x|<\surround||<vspace|11.24pt>>
    <doc-title-block|<larger|<with|font-family|ss|<with|color|<value|midgrey>|<with|font-series|bold|<arg|x>>>>>>
  </surround>>>

  <assign|doc-date|<\macro|body>
    <doc-title-block|<with|font-series|normal|<with|font-family|ss|<with|color|dark
    grey|<arg|body>>>>>
  </macro>>

  <assign|doc-misc|<\macro|body>
    <\surround||<vspace|110pt>>
      <doc-title-block|<with|font-series|normal|<with|font-family|ss|<with|color|dark
      grey|<arg|body>>>>>
    </surround>

    <active*|>
  </macro>>

  <assign|render-abstract|<\macro|body>
    <\surround||<vspace|160pt>>
      <\with|par-left|15mm|par-right|15mm>
        <\small>
          <\padded-bothlined|2.5bls|2.5bls|1ln|1ln|0.5bls|0.5bls>
            <with|font-family|rm|<arg|body>>
          </padded-bothlined>
        </small>
      </with>
    </surround>

    \;
  </macro>>

  <\active*>
    <\src-comment>
      Author information.
    </src-comment>
  </active*>

  <assign|doc-author-block|<\macro|body>
    <style-with|src-compact|none|<space|0pt><tabular|<tformat|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<cwith|1|1|1|1|cell-bsep|0spc>|<cwith|1|1|1|1|cell-tsep|0spc>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-hmode|min>|<cwith|1|1|1|1|cell-width|1par>|<table|<row|<\cell>
      <arg|body>
    </cell>>>>>>
  </macro>>

  <assign|author-by|<macro|body|<arg|body>>>

  <assign|author-name|<macro|x|<surround|<vspace*|0.0fn>|<vspace|0.0fn>|<doc-author-block|<with|font-family|rm|<with|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|author-affiliation|<macro|x|<surround|<vspace*|0.0fn>|<vspace|0.0fn>|<doc-author-block|<with|font-family|ss|<with|font-series|normal|color|<value|midgrey>|<arg|x>>>>>>>

  <assign|author-email|<macro|x|<surround|<vspace*|0.5fn>|<vspace|0.5fn>|<doc-author-block|<with|font-family|ss|<with|font-series|normal|color|<value|midgrey>|Email:
  <arg|x>>>>>>>

  <assign|author-homepage|<macro|x|<surround|<vspace*|0.5fn>|<vspace|0.5fn>|<doc-author-block|<with|font-family|ss|<with|font-series|normal|color|<value|midgrey>|Web:
  <arg|x>>>>>>>

  <assign|author-misc|<macro|x|<surround|<vspace*|0.5fn>|<vspace|0.5fn>|<doc-author-block|<with|font-family|ss|<with|font-series|normal|color|<value|midgrey>|<arg|x>>>>>>>

  <assign|doc-authors-data|<\xmacro|data>
    <\style-with|src-compact|none>
      <\quasi>
        <unquote*|<quote-arg|data>>
      </quasi>
    </style-with>
  </xmacro>>

  <active*|<\src-comment>
    Dati fissi del mittente (studio) per footer e frontespizio. Aggiunto per
    separare i dati dello studio dal campo "author" e per introdurre un tag
    "cliente" distinto.
  </src-comment>>

  <assign|sasha-copyright-2026|<verbatim|<with|font-family|ss|\<copyright\>
  2026 Dimichino. Tutti i diritti riservati.>>>

  <assign|sasha-copyright-2026-4Tek|<verbatim|<with|font-family|ss|\<copyright\>
  2026 Dimichino \| 4-Tek. Tutti i diritti riservati.>>>

  <assign|sasha-informal|Alessandro Dimichino>

  <assign|sasha-studio|ing. Luigi Alessandro Dimichino>

  <assign|sasha-indirizzo|Via Archimede 85, 20129 Milano>

  <assign|sasha-piva|P.IVA 13076630964>

  <assign|sasha-cf|CF DMCLLS68P03F205J>

  <assign|sasha-telefono|Tel. +39 335 5432334>

  <assign|sasha-email|Email alessandro.dimichino@dimichino.com>

  <assign|sasha-pec|PEC luigialessandro.dimichino@ingpec.eu>

  <assign|sasha-sito|https://www.dimichino.com/>

  <assign|sasha-footer-mittente|<style-with|src-compact|none|<with|font-family|ss|color|<value|midgrey>|<very-small|<new-line><new-line><new-line><no-indent><htab|2f><value|sasha-informal><space|1em>\<bullet\><space|1em><value|sasha-email><space|1em>\<bullet\><space|1em><value|sasha-telefono><htab|2f>>>>>

  <assign|sasha-footer-on|<\macro>
    <assign|page-odd-footer|<sasha-footer-mittente>>

    <assign|page-even-footer|<sasha-footer-mittente>>

    \;
  </macro>>

  <assign|sasha-footer-off|<\macro>
    <assign|page-odd-footer|>

    <assign|page-even-footer|>

    \;
  </macro>>

  <active*|<\src-comment>
    Blocco mittente per la prima pagina: logo (opzionale) e dati estesi. In
    affiliazione.
  </src-comment>>

  <assign|sasha-doc-mittente-logo|<macro|img|<surround||<vspace|6pt>|<doc-title-block|<htab|0mm><arg|img>>>>>

  <assign|sasha-doc-mittente-first-page-footer|<\macro>
    <surround||<vspace|0.1em>|<doc-title-block|<with|font-family|ss|color|dark
    grey|<very-small|<value|sasha-studio><new-line><value|sasha-indirizzo><new-line><value|sasha-piva><space|1em><value|sasha-cf><new-line><value|sasha-telefono><new-line><value|sasha-email><new-line><value|sasha-pec>>>>>
  </macro>>

  <assign|sasha-doc-mittente-first-page-footer-2026|<\macro>
    <surround||<vspace|0.1em>|<doc-title-block|<with|font-family|ss|color|dark
    grey|<very-small|<value|sasha-studio><new-line><value|sasha-indirizzo><new-line><value|sasha-piva><space|1em><value|sasha-cf><new-line><value|sasha-telefono><new-line><value|sasha-email><new-line><value|sasha-pec><htab|2f><value|sasha-copyright-2026>>>>>
  </macro>>

  <assign|sasha-doc-mittente-first-page-footer-2026-4Tek|<\macro>
    <surround||<vspace|0.1em>|<doc-title-block|<with|font-family|ss|color|dark
    grey|<very-small|<value|sasha-studio><new-line><value|sasha-indirizzo><new-line><value|sasha-piva><space|1em><value|sasha-cf><new-line><value|sasha-telefono><new-line><value|sasha-email><new-line><value|sasha-pec><htab|2f><value|sasha-copyright-2026-4Tek>>>>>
  </macro>>

  <active*|<\src-comment>
    Tag "cliente/committente", distinto da author. Stessa impaginazione di
    author-name ma con etichetta diversa, cosi da non usare piu il campo
    author per indicare il destinatario.

    Cliente si intende "Preparato per: [Cliente]" oppure Committente per
    "Redatto per conto di: [Cliente]"\ 

    In autore - miscellanea
  </src-comment>>

  <assign|sasha-end-customer|<macro|x|<surround|<vspace*|90pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|font-series|normal|color|<value|midgrey>|<small|Cliente><new-line><with|font-family|rm|font-series|bold|color|darker
  grey|<larger|<arg|x>>>>>>>>

  <assign|sasha-direct-client|<macro|x|<surround|<vspace*|90pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|font-series|normal|color|<value|midgrey>|<small|Committente><new-line><with|font-family|rm|font-series|bold|color|darker
  grey|<larger|<arg|x>>>>>>>>

  <assign|sasha-client-name-to|<macro|x|<surround|<vspace*|90pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|font-series|normal|color|<value|midgrey>|<small|Preparata
  per><new-line><with|font-family|rm|font-series|bold|color|darker
  grey|<larger|<arg|x>>>>>>>>

  <assign|sasha-client-name-for|<macro|x|<surround|<vspace*|90pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|font-series|normal|color|<value|midgrey>|<small|Redatta
  per conto di><new-line><with|font-family|rm|font-series|bold|color|darker
  grey|<larger|<arg|x>>>>>>>>

  <assign|sasha-client-contact|<macro|x|<surround|<vspace*|0.2fn>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|font-series|normal|color|<value|midgrey>|<small|Att.ne><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-pc-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|Proposta
  di consulenza><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-rt-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|Report
  tecnico><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-sf-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|Studio
  di fattibilità><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-rl-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|Relazione
  tecnica><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-rp-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|Rapporto
  di prova><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-wp-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|White
  paper><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <assign|sasha-document-st-version|<macro|x|<surround|<vspace*|120pt>|<vspace|0.5fn>|<doc-title-block|<with|font-family|ss|color|<value|midgrey>|<small|Specifica
  tecnica><new-line><with|font-family|rm|font-series|bold|color|dark
  grey|<arg|x>>>>>>>

  <active*|<\src-comment>
    Tables of contents.
  </src-comment>>

  <assign|chapter-toc-width|10pt>

  <assign|section-toc-width|15pt>

  <assign|subsection-toc-width|25pt>

  <assign|subsubsection-toc-width|30pt>

  <assign|paragraph-toc-width|35pt>

  <assign|subparagraph-toc-width|43pt>

  <assign|section-toc-indent|<value|chapter-toc-width>>

  <assign|subsection-toc-indent|<plus|<value|section-toc-indent>|<value|section-toc-width>>>

  <assign|subsubsection-toc-indent|<plus|<value|subsection-toc-indent>|<value|subsection-toc-width>>>

  <assign|paragraph-toc-indent|<plus|<value|subsubsection-toc-indent>|<value|subsubsection-toc-width>>>

  <assign|subparagraph-toc-indent|<plus|<value|paragraph-toc-indent>|<value|paragraph-toc-width>>>

  <assign|subsubparagraph-toc-indent|<plus|<value|subparagraph-toc-indent>|<value|subparagraph-toc-width>>>

  \;

  <assign|toc-title|<macro|env|title|<style-with|src-compact|none|<quasi|<style-with|src-compact|none|<if|<compound|<unquote|<merge|<arg|env>|-numbered>>>|<style-with|src-compact|none|<if|<equal|<arg|env>|part>|<style-with|src-compact|none|<part-text>
  <compound|<unquote|<merge|the-|<arg|env>>>><space|7pt><arg|title>>|<style-with|src-compact|none|<style-with|src-compact|none|<resize|<compound|<unquote|<merge|the-|<arg|env>>>>|||<value|<unquote|<merge|<arg|env>|-toc-width>>>|>><arg|title>>>>|<arg|title>>>>>>>

  \;

  <assign|toc-small-1|<macro|what|>>

  <assign|toc-small-2|<macro|what|>>

  <assign|render-table-of-contents|<\macro|name|body>
    <with|chapter-toc|<macro|name|>|<principal-section*|<arg|name>>>

    <with|par-first|0fn|par-par-sep|0fn|<arg|body>>
  </macro>>

  \;

  <assign|toc-sv|<macro|l|w|left|right|<tabular|<tformat|<twith|table-width|1par>|<cwith|1|1|1|1|cell-hpart|1>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|1|2|2|cell-valign|b>|<cwith|1|1|2|2|cell-halign|r>|<cwith|1|1|2|2|cell-width|1.8em>|<cwith|1|-1|1|-1|cell-lsep|0cm>|<cwith|1|-1|1|-1|cell-rsep|0cm>|<cwith|1|1|1|1|cell-halign|L>|<table|<row|<\cell>
    <\with|par-left|<arg|l>|par-first|<minus|<arg|w>>|par-mode|left>
      <yes-indent><arg|left><toc-dots>
    </with>
  </cell>|<cell|<arg|right>>>>>>>>

  \;

  <assign|toc-strong-1|<macro|left|right|<quasiquote|<surround|<vspace*|2em>|<vspace|5pt>|<with|font-family|ss|<with|color|black|<with|font-shape|small-caps|math-font-shape|small-caps|<style-with|src-compact|none|<unquote|<arg|left>>>>>>>>>>

  <assign|toc-strong-2|<macro|left|right|<style-with|src-compact|none|<vspace*|1em><style-with|src-compact|none|<toc-sv|<value|section-toc-indent>|<value|chapter-toc-width>|<with|font-family|ss|<with|color|darker
  grey|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|left>>>>|<with|color|red|<arg|right>>>>>>>

  <assign|toc-1|<macro|left|right|<toc-sv|<value|subsection-toc-indent>|<value|section-toc-width>|<with|font-family|ss|<arg|left>>|<arg|right>>>>

  <assign|toc-2|<macro|left|right|<toc-sv|<value|subsubsection-toc-indent>|<value|subsection-toc-width>|<with|font-family|ss|<with|color|dark
  grey|<arg|left>>>|<arg|right>>>>

  <assign|toc-3|<macro|left|right|<toc-sv|<value|paragraph-toc-indent>|<value|subsubsection-toc-width>|<with|font-family|ss|<with|color|dark
  grey|<arg|left>>>|<arg|right>>>>

  <assign|toc-4|<macro|left|right|<toc-sv|<value|subparagraph-toc-indent>|<value|paragraph-toc-width>|<with|font-family|ss|<with|color|dark
  grey|<arg|left>>>|<arg|right><arg|>>>>

  <assign|toc-5|<macro|left|right|<style-with|src-compact|none|<toc-sv|<value|subsubparagraph-toc-indent>|<value|subparagraph-toc-width>|<with|color|<value|midgrey>|<arg|left>>><arg|right>>>>
</body>

<\initial>
  <\collection>
    <associate|stem-doc-id|13F23519-68E2-4A10-810E-15432B714160>
  </collection>
</initial>