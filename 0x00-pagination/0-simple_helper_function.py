#!/usr/bin/env python3
""" Method on pagination in python"""
import math
import itertools
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Function returns tuple size of 2 w/ start and end index
    corresp to range indexes to return"""
    start_index = (page - 1) * page_size
    end_index = (start_index) + page_size
    return start_index, end_index
