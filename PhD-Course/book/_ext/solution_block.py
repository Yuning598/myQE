"""Register reusable collapsible directives for MyST/Sphinx."""

from html import escape
from docutils import nodes
from docutils.parsers.rst import Directive


class collapsible_block(nodes.General, nodes.Element):
    """Container node rendered as a collapsible block."""


class CollapsibleDirective(Directive):
    has_content = True
    optional_arguments = 1
    final_argument_whitespace = True
    default_title = "Solution"

    def run(self):
        node = collapsible_block()
        node["title"] = self.arguments[0] if self.arguments else self.default_title
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


class SolutionDirective(CollapsibleDirective):
    default_title = "Solution"

class CollapseDirective(CollapsibleDirective):
    default_title = "Details"


def visit_collapsible_block_html(translator, node):
    title = escape(node["title"])
    translator.body.append(
        f'<details class="solution-block"><summary>▶ {title}</summary>\n'
    )


def depart_collapsible_block_html(translator, node):
    translator.body.append('</details>\n')


def setup(app):
    app.add_node(
        collapsible_block,
        html=(visit_collapsible_block_html, depart_collapsible_block_html),
    )
    app.add_directive("solution", SolutionDirective)
    app.add_directive("collapse", CollapseDirective)
    return {
        "version": "0.1",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
