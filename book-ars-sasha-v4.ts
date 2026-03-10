<TeXmacs|2.1.4>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|book-ars-sasha|4.0>

      <\src-purpose>
        The book template customized by Alessandro Dimichino.
      </src-purpose>

      <\src-copyright|2026>
        Alessandro Dimichino
      </src-copyright>

      <\src-license>
        This software falls under the <hlink|GNU general public license,
        version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
        WARRANTY WHATSOEVER. You should have received a copy of the license
        which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
      </src-license>
    </src-title>
  </active*>

  <use-package|std|env-base|env-math|env-enunciation|env-float|env-program|header-book|title-base|section-book|html-font-size>

  <active*|<\src-comment>
    Global layout.
  </src-comment>>

  <assign|font-base-size|10>

  <active*|<\src-comment>
    Sizes.

    Really-Huge modificato da 2.5 a 3.5 (o superiore)
  </src-comment>>

  <assign|tiny|<macro|x|<with|font-size|0.5|par-sep|1pt|<arg|x>>>>

  <assign|very-small|<macro|x|<with|font-size|0.7|par-sep|1pt|<arg|x>>>>

  <assign|smaller|<macro|x|<with|font-size|0.9|par-sep|2pt|<arg|x>>>>

  <assign|small|<macro|x|<style-with|src-compact|none|<with|font-size|0.9|par-sep|2pt|<arg|x>>>>>

  <assign|normal-size|<macro|x|<style-with|src-compact|none|<with|font-size|1.0|par-sep|0.2em|<arg|x>>>>>

  <assign|large|<macro|x|<with|font-size|1.2|par-sep|2pt|<arg|x>>>>

  <assign|larger|<macro|x|<with|font-size|1.4|par-sep|<minus|<tmlen|16dd>|<tmlen|14pt>>|<arg|x>>>>

  <assign|very-large|<macro|x|<with|font-size|1.7|par-sep|<minus|<tmlen|17dd>|<tmlen|17pt>>|<arg|x>>>>

  <assign|huge|<macro|x|<with|font-size|2.0|par-sep|5pt|<arg|x>>>>

  <assign|really-huge|<macro|x|<with|font-size|3.5|par-sep|5pt|<arg|x>>>>

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
    section-title. Aggiunto color navy blue and dark red as alternatives.

    Chapter and Sections are in small-caps\ 

    <assign|part-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<vspace*|<tmlen|1.7bls|1.6bls|2.1bls>><with|font-family|ss|<very-large|<with|font-shape|small-caps|<with|color|dark
    red|<arg|name>>>>><vspace|1bls>>>>>
  </src-comment>>

  <active*|<\src-comment>
    Sectional macros.

    Defined a new style for the Number of the chapter
  </src-comment>>

  <assign|part-size|<macro|x|<very-large|<arg|x>>>>

  <assign|part-style|<macro|x|<with|font-family|ss|<with|color|dark
  red|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>>

  <assign|chap-size|<macro|x|<larger|<arg|x>>>>

  <assign|chap-style|<macro|x|<with|font-family|ss|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>

  <assign|chap-num-size|<macro|x|<really-huge|<arg|x>>>>

  <assign|chap-num-style|<macro|x|<with|font|euler|<arg|x>>>>

  <assign|sec-size|<macro|x|<large|<arg|x>>>>

  <assign|sec-style|<macro|x|<with|font-family|ss|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>

  <assign|subsec-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|subsec-style|<macro|x|<with|font-family|ss|<with|font-shape|slanted|math-font-shape|slanted|<arg|x>>>>>

  <assign|subsubsec-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|subsubsec-style|<macro|x|<with|font-family|ss|<with|font-shape|italic|math-font-shape|italic|<arg|x>>>>>

  <assign|paragraph-size|<macro|x|<normal-size|<arg|x>>>>

  <assign|paragraph-style|<macro|x|<with|font-family|ss|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|x>>>>>

  <assign|enrich-paragraph-long|true>

  \;

  <assign|part-number-title|<macro|num|title|<style-with|src-compact|none|<blanc-page><no-indent><new-line><no-indent><with|color|dark
  red|<wide-std-underlined|<part-style|<chap-size|<htab|0mm><part-text><arg|num>><vspace|0pt><new-line>>>><vspace|106pt><new-line><no-indent><part-style|<part-size|<htab|0mm><arg|title>>><vspace|10pt><no-page-break><no-indent*><right-flush>>>>

  <assign|part-title|<macro|title|<part-number-title||<arg|title>>>>

  <assign|part-numbered-title|<macro|title|<part-number-title|
  <the-part>|<arg|title>>>>

  \;

  <assign|chapter-number-title|<macro|num|title|<style-with|src-compact|none|<no-indent><new-line><no-indent><chap-num-style|<with|color|dark
  grey|<htab|0mm><chap-num-size|<arg|num>>>><vspace|10pt><new-line><no-indent><chap-style|<with|color|black|<wide-std-underlined|<chap-style|<with|color|black|<chap-size|<arg|title>><vspace|0pt><new-line>>>>>><vspace|56pt><no-page-break><no-indent*><right-flush>>>>

  <assign|tmhtml-chapter-number-title|<macro|num|title|<chapter-title|<arg|num><space|0.5em><arg|title>>>>

  <assign|chapter-title|<macro|title|<chapter-number-title||<arg|title>>>>

  <assign|chapter-numbered-title|<macro|title|<chapter-number-title|<the-chapter>|<arg|title>>>>

  <assign|appendix-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-number-title|<appendix-text>
  <the-appendix>|<arg|title>>>>>

  <assign|section-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|1bls><sec-style|<sec-size|<arg|name>>><vspace|1bls>>>>>>

  <assign|subsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|1bls><subsec-style|<subsec-size|<arg|name>>><vspace|1bls>>>>>>

  <assign|subsubsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal|<style-with|src-compact|none|<vspace*|1bls><subsubsec-style|<subsubsec-size|<arg|name>>><vspace|1bls>>>>>>

  <assign|paragraph-title|<macro|name|<style-with|src-compact|none|<sectional-normal-italic|<style-with|src-compact|none|<vspace*|0.5bls><normal-size|<arg|name>><vspace|0.5bls>>>>>>

  <assign|subparagraph-title|<macro|name|<style-with|src-compact|none|<sectional-short-italic|<style-with|src-compact|none|<vspace*|0.5bls><normal-size|<arg|name>><space|5pt>>>>>>

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

      <assign|header-title|<macro|name|>>
      \ <assign|header-author|<macro|name|>>
      <assign|header-primary|<macro|name|nr|type|<assign|page-even-header|<smaller|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<page-number><htab|5mm><with|color|dark
      grey|<arg|name>>>>>>>>> <assign|header-secondary|<macro|name|nr|type|<assign|page-odd-header|<smaller|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<page-number><htab|5mm><with|color|dark
      grey|<arg|name>>>>>>>>>
    </src-comment>
  </active*>

  <assign|header-title|<macro|name|<style-with|src-compact|none|<simple-page><assign|page-odd-header|<smaller|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<with|color|dark
  grey|<arg|name>><htab|5mm><page-number>>>>>>>>>
  <assign|header-author|<macro|name|<assign|page-even-header|<smaller|<style-with|src-compact|none|<no-indent><with|font-family|ss|<with|font-shape|small-caps|<page-number><htab|5mm><with|color|dark
  grey|<arg|name>>>>>>>>>\ 

  <assign|header-primary|<macro|name|nr|what|>>\ 

  <assign|header-secondary|<macro|name|nr|what|>>

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
      Title information.
    </src-comment>
  </active*>

  <assign|doc-title-block|<macro|body|<tabular|<tformat|<twith|table-width|1par>|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<cwith|1|1|1|1|cell-bsep|0spc>|<cwith|1|1|1|1|cell-tsep|0spc>|<cwith|1|1|1|1|cell-hyphen|t>|<table|<row|<\cell>
    <with|par-first|0fn|<arg|body>>
  </cell>>>>>>>

  <assign|doc-make-title|<macro|body|<surround||<vspace|22.47pt>|<doc-title-block|<arg|body>>>>>

  <assign|doc-title|<macro|x|<\surround||<vspace|11.24pt>>
    <doc-title-block|<larger|<with|font-family|ss|<with|math-font-series|bold|font-series|bold|<arg|x>>>>>
  </surround>>>

  <\active*>
    <\src-comment>
      Title information. Subtytle font size from large to huge. Added dark
      red color. <assign|doc-subtitle|<macro|x|<\surround||<vspace|11.24pt>>
        <doc-title-block|<large|<with|font-family|ss|<with|math-font-series|bold|font-series|bold|<arg|x>>>>>
      </surround>>>
    </src-comment>
  </active*>

  <assign|doc-subtitle|<macro|x|<\surround||<vspace|11.24pt>>
    <doc-title-block|<huge|<with|font-family|ss|<with|color|dark
    red|<with|math-font-series|bold|font-series|bold|<arg|x>>>>>>
  </surround>>>

  <assign|doc-date|<\macro|body>
    <doc-title-block|<with|font-series|italic|<with|font-family|ss|<arg|body>>>>
  </macro>>

  <assign|render-abstract|<\macro|body>
    <\with|par-left|15mm|par-right|15mm>
      <\small>
        <\padded-bothlined|2.5bls|2.5bls|1ln|1ln|0.5bls|0.5bls>
          <with|font-family|ss|<arg|body>>
        </padded-bothlined>
      </small>
    </with>
  </macro>>

  <\active*>
    <\src-comment>
      Author information.

      In v2 author-name from normal to bold in color navy blue
    </src-comment>
  </active*>

  <assign|doc-author-block|<\macro|body>
    <style-with|src-compact|none|<space|0pt><tabular|<tformat|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<cwith|1|1|1|1|cell-bsep|0spc>|<cwith|1|1|1|1|cell-tsep|0spc>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-hmode|min>|<cwith|1|1|1|1|cell-width|1par>|<table|<row|<\cell>
      <arg|body>
    </cell>>>>>>
  </macro>>

  <assign|author-by|<macro|body|<arg|body>>>

  <assign|author-name|<macro|x|<surround|<vspace*|0.5fn>|<vspace|0.5fn>|<doc-author-block|<with|font-family|ss|<with|font-series|bold|color|navy
  blue|<arg|x>>>>>>>

  <assign|doc-authors-data|<\xmacro|data>
    <\style-with|src-compact|none>
      <\quasi>
        <unquote*|<quote-arg|data>>
      </quasi>
    </style-with>
  </xmacro>>

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

  <assign|toc-strong-1-old|<macro|left|right|<quasiquote|<surround|<vspace*|2em>|<vspace|5pt>|<wide-bothlined|1ln|1ln|3sep|3sep|<with|font-family|ss|<with|color|dark
  red|<with|font-shape|small-caps|math-font-shape|small-caps|<style-with|src-compact|none|<unquote|<arg|left>>>>>>>>>>>

  <assign|toc-strong-1|<macro|left|right|<quasiquote|<surround|<vspace*|2em>|<vspace|5pt>|<with|font-family|ss|<with|color|dark
  red|<with|font-shape|small-caps|math-font-shape|small-caps|<style-with|src-compact|none|<unquote|<arg|left>>>>>>>>>>

  <assign|toc-strong-2|<macro|left|right|<style-with|src-compact|none|<vspace*|1em><style-with|src-compact|none|<toc-sv|<value|section-toc-indent>|<value|chapter-toc-width>|<with|font-family|ss|<with|font-shape|small-caps|math-font-shape|small-caps|<arg|left>>>|<arg|right>>>>>>

  <assign|toc-1|<macro|left|right|<toc-sv|<value|subsection-toc-indent>|<value|section-toc-width>|<with|font-family|ss|<arg|left>>|<arg|right>>>>

  <assign|toc-2|<macro|left|right|<toc-sv|<value|subsubsection-toc-indent>|<value|subsection-toc-width>|<with|font-family|ss|<arg|left>>|<arg|right>>>>

  <assign|toc-3|<macro|left|right|<toc-sv|<value|paragraph-toc-indent>|<value|subsubsection-toc-width>|<with|font-family|ss|<arg|left>>|<arg|right>>>>

  <assign|toc-4|<macro|left|right|<toc-sv|<value|subparagraph-toc-indent>|<value|paragraph-toc-width>|<with|font-family|ss|<arg|left>>|<arg|right>>>>

  <assign|toc-5|<macro|left|right|<style-with|src-compact|none|<toc-sv|<value|subsubparagraph-toc-indent>|<value|subparagraph-toc-width>|<arg|left>|<arg|right>>>>>
</body>

<initial|<\collection>
</collection>>