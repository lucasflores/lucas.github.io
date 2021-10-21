Several LaTeX packages are required - I don't have a comprehensive list, but 
the main one that you may not have is PGF:

http://sourceforge.net/projects/pgf/

I have used version 2.00 to develop this document.

Please feel free to contact me in case of questions.

Thanks!

-Mike
michael.hance@cern.ch

July 2012


-------------------------------------------------------------------------------

I have updated this template to be a bit more general for other users.  Put your
personal data in tex/docdefs.tex.

Build by simply calling:

    make

--
Ryan
ryan.reece@cern.ch
October 2012

-------------------------------------------------------------------------------

I've made some long overdue improvements to the template. One particular one is
that the draft and electronic versions now have exactly the same formatting
(margins, etc.) as what Penn asks for. Note that the margins are asymmetric, as
it's single-sided and bound on the left. If you want it to be symmetric for some
reason, you can modify it in style/pennThesis.cls.

-Bill
balunas@cern.ch

May 2018

-------------------------------------------------------------------------------

+Changed some colors to make it more like current ATLAS style
+Renamed tex folder to sections folder 
+Updated bibs (June 2018) 
+Added GitLab CI 
+Added thesis lumi plot (need pdfinfo package, I think on mac it is xpdf package), 
Note this works properly once you've been writing your thesis for more than 
6 days... Also make sure to manually change the first entry of lumi_plot/pages.csv.  

NOTE: If you use a DEBIAN system (like Ubuntu) you need to add the line
SHELL = /bin/bash at the beginning of the MakeFile as debian has
/bin/sh set as 'dash' shell rather than 'bash' 

NOTE2: To compile version for Penn, change variables 'isDraft' in 
sections/docdefs.tex and 'boolVersionForPenn' in style/pennThesis.cls

-Khilesh
khilesh.mistry@cern.ch
(cern.ch@cern.ch) (now defunct)

November 2018

-------------------------------------------------------------------------------

- One way to do spellchecking is to use aspell. Example usage: cat sections/*tex sections/*/*tex | aspell list -t | sort | uniq
- To get latest bibliography information, go to https://gitlab.cern.ch/atlas-physics-office/atlaslatex/blob/master/bib/
- To have a direct link to the lumi plot, go to https://gitlab.cern.ch/<username>/<reponame>/-/jobs/artifacts/master/file/thesis_lumi.pdf?job=thesis-lumi

-------------------------------------------------------------------------------
Templates for figures and tables:


\begin{figure}[tp]
    \centering
    \includegraphics[width=0.48\textwidth]{figs/TODO}
    \caption[This is a short version of the caption for the List of Figures]
            {This is a long version of the caption that goes under the
             figure itself. This can be really long.}   
    \label{fig:electron/TODO}
\end{figure}

\begin{table}[bp]
    \centering
    \caption[This is a short version of the caption for the List of Tables]
            {This is a long version of the caption that goes under the
             table itself. This can be really long.}   
    \begin{tabular}{l r r}
        \hline\hline
        Selection                   & Data events & dijet MC ($\times 10^{6}$) \\
        \hline
        GRL                         &  15033637 &  6.2(2) \\
        \texttt{L1\_TAU5}           &   5651435 &  5.7(2) \\
        no ugly jet                 &   5510182 &  5.6(2) \\
        has vertex                  &   5498640 &  5.6(1) \\
        passes dijet                &   2944891 &  2.9(1) \\
        $N(\tauh)$ with $\pt > 15 \GeV$   &   3939502 &  3.9(1) \\
        \hline\hline
    \end{tabular}
    \label{tab:tau/TODO}
\end{table}

