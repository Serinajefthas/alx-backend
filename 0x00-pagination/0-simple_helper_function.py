#!/usr/bin/env python3
""" Method on pagination in python"""
import math
import itertools


def index_range(page, page_size):
    """Function returns tuple size 2 w/ start and end index corresp to range indexes to return"""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size


